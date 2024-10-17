/* istanbul ignore file */

import cors from "cors";
import express, { Request, Response } from "express";

import { environment } from "@configuration/environment";
import { handleErrors } from "@configuration/catch-all.handler";

const { CORS_ORIGIN, NODE_ENV, PORT } = environment();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: CORS_ORIGIN }));

app.get("/", (_: Request, res: Response) => {
  res.status(200).send({ message: "Hello World!" });
});

app.use((_req, res, _next) => {
  res.status(404).send();
});

app.use(handleErrors);

app.listen(PORT, () => {
  console.info(`Current environment: ${ NODE_ENV }`);
  console.info(`App listening on the port ${ PORT } 🎉`);
});
