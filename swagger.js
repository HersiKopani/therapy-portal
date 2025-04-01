const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Orders API",
      version: "1.0.0",
      description: "API for managing orders linked to users",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to API routes
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
