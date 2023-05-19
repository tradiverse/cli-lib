# Tradiverse CLI Library

A automatically generated CLI library for [Space Traders](https://spacetraders.io/) that can be used in both NodeJS and a web browser.

```bash
npm install @tradiverse/cli-lib
```

> NOTE: this is just a library it is not a stand alone CLI tool

## Examples

- [CLI](https://github.com/tradiverse/web)
- [Web CLI](https://github.com/tradiverse/web-cli)


## How / What?

This project downloads the Space Traders API spec from https://github.com/SpaceTradersAPI/api-docs and translates it into a cli utility including help screens (powered by the descriptions in the api docs).

`parse-api.js` parses the the Open API spec into a custom json format (`cli-data.json`) that is used by `cli-lib.js`

## Why? 

I didn't feel like manually creating a CLI and it sounded like a fun project