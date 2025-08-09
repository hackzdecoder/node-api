import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '.');

export const paths = {
    routes: pathToFileURL(path.join(baseDir, 'routes')).href,
    controllers: pathToFileURL(path.join(baseDir, 'app/controllers')).href,
    models: pathToFileURL(path.join(baseDir, 'app/models')).href,
    config: pathToFileURL(path.join(baseDir, 'config')).href,
};
