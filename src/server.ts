import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./shared/container/index";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
    console.log("RRRRodando...");
    console.log("Documentation -> http://localhost:3333/api-docs/");
});
