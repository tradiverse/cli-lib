import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const CLI_DATA_PATH = path.resolve(__dirname, 'data/cli-data.js');
export const BASE_API_PATH = path.resolve(__dirname, 'api-docs/reference');
