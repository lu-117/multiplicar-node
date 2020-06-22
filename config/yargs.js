const { config } = require('yargs');

const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Impreime en consola la tabla', opt)
    .command('crear', 'Crear un archivo con la tabla especificada', opt)
    .help()
    .argv;

module.exports = {
    argv
}