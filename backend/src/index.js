//Aca vamos a crear el arranque de nuestro servidor

require('dotenv').config() //Esto es para que las variables de entorno funcionen

const app = require('./app')

require('./database')

//Esto es para ejecutar el servidor
async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
    
}

main();