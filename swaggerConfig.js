const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/*.js"]; // Your API routes directory

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require("./server.js"); // Start the Express server after Swagger Autogen finishes
});
