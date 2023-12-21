#! /usr/bin/env node 

const path = require('path');
const colors = require('colors');
const FileGenerator = require('./modules/FileGenerator.js');
const Menu = require('./utils/Menu.js');
const PathWork = require('./utils/PathWork.js');

// Obtén la ruta del directorio del ejecutable
const executableDir = process.cwd(); //path.dirname(process.execPath);

const TARGET = path.join(executableDir,`lib/presentation`);
const TARGET_PATH = path.join('../', TARGET);

function getFileName(i) {
    switch (i) {
        case 1:
            return 'connector';
        case 2:
            return 'screen';
        case 3:
            return 'style';
        default:
            return 'connector';
    }

}

(async() => {
    try {
        // console.log(__dirname + '/' + TARGET)
        if (!PathWork.checkIfDirectoryExists(TARGET)) {
            // throw new Error(`Carpeta ${TARGET} no encontrada!`);
            console.log(colors.red(`Carpeta ${TARGET} no encontrada!`));
            console.log(colors.red(`Estas en un proyecto flutter??`));
            return;
        }

        console.clear();

        const { name } = await Menu.askText();

        if (!name) {
            console.log(colors.red(`🔨 🔨 🔨 🔨 `));
            return;
        }
        const TARGET_PATH_NAME = `${TARGET}/${name.toLowerCase()}`;

        console.log(colors.green(`Creando directorio: ${TARGET_PATH_NAME}`));
        console.log();

        if (!PathWork.checkIfDirectoryExists(TARGET_PATH_NAME,)) {
            PathWork.checkIfDirectoryExists(TARGET_PATH_NAME, true);
        } else {
            console.log(colors.red(`👾👾👾 Carpeta ${TARGET_PATH_NAME} ya existe!, no la voy a sobreescribir! 👾👾👾 `));
            return;
        }

        for (let i = 1; i < 4; i++) {
            const file = new FileGenerator(name, i, TARGET_PATH_NAME);
    
            file.writeFile();
            
            console.log(colors.green(`Archivo ${getFileName(i)} creado exitosamente!`));
            console.log();
        }
        
        console.log();
        const mauro = colors.rainbow(`mauro generate!`);
        console.log(colors.italic(`Gracias por usar ${mauro}`));
        console.log();
    } catch (error) {
        console.log(error)
        colors.red('==========WTF!!==========');
        console.log(colors.red(error));
    }
})();
    