const path = require('path');
const fs = require('fs');

const String = require('../utils/String.js');
const File = require('./File.js');

class FileGenerator extends File {
    
    constructor(name, fileType, path=null) {
        super(fileType);
        this.name = String.toCamelCase(name);
        this.camelCaseName = String.toUpperCamelCase(this.name);
        this.snakeCaseName = String.toSnakeCase(this.name);
        this.path = path;

        this.replaceContent();
    }

    writeFile() {
        let name = `${this.path}/`;

        if (this.fileType === 1) {
            name += `${this.snakeCaseName}_connector.dart`;
        } else if (this.fileType === 2) {
            name += `${this.snakeCaseName}_screen.dart`;
        } else if (this.fileType === 3) {
            name += `${this.snakeCaseName}_selector.dart`;
        } else {
            // throw error
            throw new Error('File type not supported');
        }

        fs.writeFileSync(name, this.content, { recursive: true });
    }

    replaceContent() {
        // this.camelCaseName = String.toCamelCase(this.name);
        this.content = String.replaceVariableName(this.content, this.camelCaseName);
        this.content = String.replaceFileName(this.content, this.snakeCaseName);
    }
}

module.exports = FileGenerator;
