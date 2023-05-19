import { CLI_DATA } from './data/cli-data.js';

export class TradiverseCli {

    constructor({ authToken, httpRequest, extraCommands }) {
        this.authToken = authToken;
        this.httpRequest = httpRequest;
        this.cliData = { ...CLI_DATA, commands: { ...CLI_DATA.commands, ...extraCommands } };
    }

    async handleCli(input, options = {}) {
        const jsonData = options.jsonData || {};
        const page = options.page || 1;

        // recursively handle command input
        const handleCommand = async (input, commandParent, params = {}) => {

            const commands = commandParent.commands;
            const cmdInput = input.length === 0 ? '' : input[0].trim();
            const cmd = cmdInput.toUpperCase();

            // base case - run the command
            if (cmd !== 'HELP' && (commandParent.apiPath || commandParent.execute) && input.length === (commandParent.props?.length || 0)) {
                if (commandParent.execute) {
                    return { result: await commandParent.execute() };
                }
                if (!this.authToken && commandParent.apiAuth) {
                    return { result: 'You must provide an auth token to run this command' };
                }

                let url = this.cliData.apiBaseUrl + commandParent.apiPath;
                Object.entries(params).forEach(([k, v]) => url = url.replace(k, v));

                const headers = {
                    'Content-Type': 'application/json',
                };
                if (this.authToken) {
                    headers.Authorization = 'Bearer ' + this.authToken;
                }

                const requestOptions = {
                    method: commandParent.apiAction,
                    url,
                    params: {
                        page,
                        limit: 20,
                    },
                    headers,
                };

                if (commandParent.props.length || Object.keys(jsonData).length > 0) {
                    const data = {};
                    commandParent.props.forEach(({ name }, i) => data[name] = input[i]);

                    Object.entries(jsonData).forEach(([key, value]) => data[key] = value);

                    requestOptions.data = data;
                }

                try {
                    return {
                        operationId: commandParent.operationId,
                        result: await this.httpRequest(requestOptions),
                    };
                } catch (e) {
                    return { result: e?.response?.data || e };
                }
            }

            if (cmd === 'HELP' || cmd === '') {
                let commandHelp = Object.entries(commands || {}).map(([k, v]) => {
                    const cmdName = k === '_' ? v.param : k;
                    return cmdName + '\n' + (v.description || '???').split('\n')[0] +
                        (v.usage ? '\nusage: ' + v.usage : '') + '\n' +
                        'sub commands: ' + (Object.keys(v.commands || {}).length || 'none');
                }).join('\n\n');

                if (!commandHelp) {
                    let propInfo = '';
                    if (commandParent.props?.length) {
                        propInfo = '\n\n'
                            + commandParent.props.map(({ name, description, options }) => {
                                let optionInfo = '';
                                if (options?.length) {
                                    optionInfo = ' (' + options.join(', ') + ')';
                                }
                                return name + ' - ' + (description || '???') + optionInfo;
                            }).join('\n\n');
                    }

                    const result = '\n\n'
                        + commandParent.description
                        + '\n\n'
                        + 'usage: ' + commandParent.usage
                        + propInfo
                        + '\n\n';
                    return { operationId: commandParent.operationId, result };
                }

                const result = '\n\n'
                    + commandHelp
                    + '\n\n'
                    + 'HELP - Show help for using this command'
                    + '\n\n';
                return { operationId: commandParent.operationId, result };

            } else if (commands[cmd]) {
                return handleCommand(input.slice(1), commands[cmd], params);
            } else if (commands['_'] && commands['_'].param) {
                params[commands['_'].param] = cmdInput;
                return handleCommand(input.slice(1), commands['_'], params);
            }

            // else return undefined (aka unknown command)
        }

        return (await handleCommand(input, this.cliData)) || { result: 'Unknown command. Please type help for guidance.' };
    }
}