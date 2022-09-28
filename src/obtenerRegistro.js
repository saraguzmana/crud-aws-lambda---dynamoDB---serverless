const AWS = require('aws-sdk');

const obtenerRegistro = async (event ) => {
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { id } = event.pathParameters;

// obtenemos un dato por medio del método get
const result = await dynamodb.get({
    // se busca en la tabla crudPrueba, el registro que seleccionemos por su id
    TableName: 'crudPrueba',
    Key: {
        id: id
    }
}).promise();

// se guarda el registro encontrado en la variable 'registro'
const registro = result.Item

// se le retorna al cliente el estado y el registro encontrado
return{
    status: 200,
    body: registro
}
};

module.exports = {
    obtenerRegistro,
}