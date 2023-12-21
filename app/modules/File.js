const fs = require('fs');
const path = require('path');

const CONN_PATH = path.join(__dirname, `../templates/Connector.dart`);
const SCREEN_PATH = path.join(__dirname, '../templates/Screen.dart');
const SELECTOR_PATH = path.join(__dirname, '../templates/Selector.dart');

class File {

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

module.exports = File;
