const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.red(`${ archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no definido');
}

//console.log(argv);

//let base = 'A';

//console.log(multiplicar);
//multiplicar.crearArchivo;
//console.log(process.argv);
//let argv2 = process.argv;
//console.log('base ' + argv.base);
//console.log('limite ' + argv.limite);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//    .catch(e => console.log(e));