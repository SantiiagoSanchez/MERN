//Aca vamos a crear el arranque de nuestro servidor

const app = require('./app')

//Esto es para ejecutar el servidor
async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
    
}

main();