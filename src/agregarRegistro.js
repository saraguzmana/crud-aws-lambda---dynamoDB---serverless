    // uuid lo usamos para crear identificadores únicos universales
    const { v4 } = require('uuid')
    //aws-sdk nos permite integrarnos a los servicios de aws
    const AWS = require('aws-sdk');


    const agregarRegistro = async(event) => {
    // esta constante se intentará conectarse a la bd
   const dynamodb = new AWS.DynamoDB.DocumentClient();

   // datos que esperamos que nos envíe el cliente
   const {title, description } = JSON.parse(event.body);
   const createdAt = new Date().toUTCString(); 
   const id = v4();

   // este nuevoRegistro es lo que se guarda como item
   const nuevoRegistro = {
    id,
    title,
    description,
    createdAt,
    done: false
   };

   //se usa el objeto de conexión para guardar datos en él por medio del método put
   // put nos permite guardar un objeto
   await dynamodb
   .put({
       TableName: 'crudPrueba',
       Item: nuevoRegistro
   }).promise();

   // se le retorna al cliente un código de estado 200, y como body, el nuevo registro agregado en formato JSON
   return{
    statusCode: 200,
    body: JSON.stringify(nuevoRegistro)
   };
};

// se retorna la función como un objeto
module.exports = {
    agregarRegistro,
};