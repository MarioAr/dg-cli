import FileGenerator from "./modules/FileGenerator.js";
import Menu from "./utils/Menu.js";
import  colors from 'colors';

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
        console.clear();
        const { name } = await Menu.askText();

        for (let i = 1; i < 4; i++) {
            // console.log(colors.yellow(`Creando archivo ${getFileName(i)}...`));
    
            const file = new FileGenerator(name, i);
    
            file.writeFile();
            
            console.log(colors.green(`Archivo ${getFileName(i)} creado exitosamente!`));
        }
        
        console.log();
        const mauro = colors.rainbow(`mauro generate!`);
        console.log(colors.italic(`Gracias por usar ${mauro}`));

    } catch (error) {
        console.log(error)
        colors.red('==========WTF!!==========');
        console.log(colors.red(error));
    }
})();
    