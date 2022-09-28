const AWS = require('aws-sdk');

const listarRegistro = async (event ) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // scan nos lista la información de la tabla
    const result = await dynamodb.scan({
        // se le pasa la tabla que deseamos consultar
        TableName: 'crudPrueba'
    }).promise()

    // se guardan los registros en la variable 'registro'
    const registro = result.Items;
    
    // se le retorna al cliente los registros encontrados
    return {
        status: 200,
        body: registro,
    };
};

module.exports = {
    listarRegistro,
};