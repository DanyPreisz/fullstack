require("dotenv").config();
const express = require("express");
//const swaggerUi = require("swagger-ui-express");
//const morganBody = require("morgan-body");
const cors = require("cors");
const app = express();
//const dbConnectNoSql = require("./config/mongo");
//const { dbConnectMySQL } = require("./config/mysql");
//const swaggerSpec = require("./docs/swagger");
//const { loggerSlack } = require("./utils/handleLoger");
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));
const port = 3000;

app.get("/Holamundo", (req, res) => {
  console.log("Se recibió una solicitud GET en holamundo");
  res.send("Hola mundo");
});
app.listen(port, () => {
  console.log("app lista en el puerto 3000");
});
