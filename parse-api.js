import path from 'path';
import fs from 'fs-extra';

import { BASE_API_PATH, CLI_DATA_PATH } from './constants.js';

// Because a REST API can have multiple actions at a single url
// This map can be used to manually define the cli command mapped to the http method
// If the parser encounters a path with multiple methods it will prompt you to add a human-friendly name here
// format: { [open-api-operation-id]: 'command-name' }
const ACTION_NAME_MAP = {
    'get-my-ships': 'list',
    'purchase-ship': 'purchase',
    'patch-ship-nav': 'set',
    'get-ship-nav': 'get',
};

parseIt();

function splitCamelCase(input) {
    return input.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
}

async function loadEnumRef(ref) {
    try {
        const doc = await fs.readJSON(path.resolve(BASE_API_PATH, ref));
        if (doc && doc.enum && Array.isArray(doc.enum)) {
            return doc.enum;
        }
    } catch (e) {
        console.error('LOAD REF ERROR', e);
    }
    return;
}

async function parseIt() {
    const doc = await fs.readJSON(path.resolve(BASE_API_PATH, 'SpaceTraders.json'));
    const apiBaseUrl = doc.servers[0].url;
    const result = { apiBaseUrl, commands: {} };

    for (let [apiPath, apiDef] of Object.entries(doc.paths)) {

        let paramSet = new Set();
        let params = (apiDef.parameters || []).map(({ name, description }) => {
            paramSet.add(name);
            return { name, description };
        });

        const actionCount = Object.keys(apiDef).filter(v => v != 'parameters').length;

        for (let [action, actionDef] of Object.entries(apiDef)) {
            if (action === 'parameters') {
                continue;
            }

            const props = [];
            const jsonData = [];
            if (actionDef.requestBody) {
                const { properties } = actionDef.requestBody.content['application/json'].schema;

                for (let [propName, propValue] of Object.entries(properties)) {
                    const { description, enum: options } = propValue;
                    if (propValue && propValue['$ref']) {

                        const ref = await loadEnumRef(propValue['$ref'])
                        if (ref) {
                            props.push({ name: propName, description, options: ref });
                        } else {
                            jsonData.push(propName);
                        }
                    } else {
                        props.push({ name: propName, description, options });
                    }
                }
            }

            const pathParts = apiPath.replace(/^\/|\/$/g, '').split('/');

            if (pathParts[0] === 'my') {
                pathParts.shift();
            }

            if (actionCount > 1) {
                const namedAction = ACTION_NAME_MAP[actionDef.operationId];
                if (namedAction) {
                    pathParts.push(namedAction);
                } else {
                    pathParts.push(action);
                }
            }

            let commandRef = result;

            for (let part of pathParts) {
                let param;
                if (part.startsWith('{')) {
                    param = part;
                    part = '_';
                }

                part = part.toUpperCase();
                if (!commandRef.commands[part]) {
                    commandRef.commands[part] = {
                        description: '',
                        commands: {},
                        param,
                    };
                }
                commandRef = commandRef.commands[part];
            }
            const commandProps = props.length > 0 ? ' ' + props.map(({ name }) => '{' + splitCamelCase(name) + '}').join(' ') : '';
            commandRef.usage = pathParts.map(v => v.startsWith('{') ? splitCamelCase(v) : v).join(' ') + commandProps;
            commandRef.description = actionDef.description;
            commandRef.operationId = actionDef.operationId;
            commandRef.props = props;
            commandRef.jsonData = jsonData;
            commandRef.apiPath = apiPath;
            commandRef.apiAction = action;
            commandRef.apiAuth = !!actionDef.security;
            commandRef.params = params;
        }
    }

    const data = JSON.stringify(result);

    await fs.writeFile(CLI_DATA_PATH, `/* THIS FILE IS AUTO GENERATED BY PARSE-API.JS */ \n\nexport const CLI_DATA=${data}`);

    console.log('PARSE SUCCESSFUL!!');
}