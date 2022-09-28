
const AWS = require("aws-sdk");

const actRegistro = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { done, title, description } = JSON.parse(event.body);

  await dynamodb
    .update({
      // nombre de la bd
      TableName: "crudPrueba",
      // key es para encontrar el dato por el id
      Key: { id },
      // en esta línea decimos que se quiere actualizar
      UpdateExpression: "set done = :done, title = :title, description = :description",
      ExpressionAttributeValues: {
      // estos son los datos que vienen desde el body (se actualizan los datos viejos por los que se insertan en el body)
        ":done": done,
        ":title": title,
        ":description": description,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();
 // luego de ejecutarse la función, se retorna un mensaje de actualización
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Registro actualizado exitosamente.",
    }),
  };
};

module.exports = {
  actRegistro,
};