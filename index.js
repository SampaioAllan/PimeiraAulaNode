const readXlsxFile = require('read-excel-file/node');
const validator = require('validator');

readXlsxFile('./documents/Alunos.xlsx').then((rows) => {
    for (let linha = 1; linha < rows.length; linha++) {
        if (!validator.isEmpty(rows[linha][0]) && validator.isEmail(rows[linha][1]) && (rows[linha][2] > 0) && validator.isAlphanumeric(rows[linha][3])){
            console.log('   Nome: ' + rows[linha][0] + '    |  Email: ' + rows[linha][1] + '   |   Idade: ' + rows[linha][2] + '   |   Matricula: ' + rows[linha][3]);
            console.log('|_______________________________________________________________________________________________________________________________________|');
        }        
    }
})