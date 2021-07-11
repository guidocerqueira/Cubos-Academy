const express = require("express");
const routes = require("./routes");
const serv = express();

serv.use(express.json());
serv.use(routes);

serv.listen(8000);