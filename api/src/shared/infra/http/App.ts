import "reflect-metadata";

import { createConnections } from "typeorm";

import "../../container";
import server from "./server";

createConnections();

const port = process.env.PORT || 3333;
server.listen(port, () => {
  console.log(`🚀server online on port ${port}`);
});
