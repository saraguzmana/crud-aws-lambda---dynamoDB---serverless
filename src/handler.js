"use strict";
// esta es una función por defecto que trae serverless
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world',
        input: event,
      },
      null,
      2
    ),
  };
};
