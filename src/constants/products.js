import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const PATH_DB = path.resolve(__dirname, '../db/db.json');
export const PATH_FILES_DIR = path.resolve(__dirname, '../db/files');
