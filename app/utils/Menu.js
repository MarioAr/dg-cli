const inquirer = require('inquirer');

class Menu {

    static askText(message='Nombre del template:') {

        const questions = [
            {
                type: 'input',
                name: 'name',
                message,
            }
        ];

        return inquirer.prompt(questions);
    }
}

module.exports = Menu;