require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
const { pausa } = require('./helpers/inquirer');


// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
  console.log('Hola mundo');
  let opt = '';
  do {
    opt = await inquirerMenu();
    console.log({ opt });
    await pausa();
    // if(opt !== '0') await pausa();
  } while (opt !== 0);
};

main();
