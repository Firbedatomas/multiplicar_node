const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        console.log((`${base} * ${i} = ${base * i}\n`).yellow);
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}-con-limite-en-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-con-limite-en-${limite}.txt`);
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}