import fs from 'fs';
import path from 'path';

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

const CONN_PATH = path.join(__dirname, '../', 'templates', 'Connector.dart');
const SCREEN_PATH = path.join(__dirname, '../','templates', 'Screen.dart');
const SELECTOR_PATH = path.join(__dirname, '../','templates', 'Selector.dart');

export default class File {

    constructor(fileType) {
        this.content = null;
        this.fileType = fileType;

        this.readContent();
    }

    readContent() {
        if (this.fileType === 1) { // Connector
            this.readSync(CONN_PATH);
        } else if (this.fileType === 2) { // Screen
            this.readSync(SCREEN_PATH);
        } else if (this.fileType === 3) { // Style
            this.readSync(SELECTOR_PATH);
        } else {
            // throw error
            throw new Error('File type not supported');
        }
    }

    readSync(path) {
        this.content = fs.readFileSync(path, 'utf8');
    }
}