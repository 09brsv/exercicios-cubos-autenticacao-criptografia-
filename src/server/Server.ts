import express from "express";
import 'express-async-errors';
import 'dotenv/config';

import { router } from "./routes/router";
import { errors } from "./shared/middlewares";

const server = express();

server.use(express.json());
server.use(router);

server.use(errors);

export { server };

