//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        fs.writeFile(`tablas/tabla_${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla_${ base }-al-${ limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}