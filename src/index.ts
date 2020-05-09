import { ApolloServer, gql } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { readFileSync } from "fs";
import { join } from "path";

import resolvers from "./resolvers";

const port = process.env.PORT || "8080";
const app = express();
const server = new ApolloServer({
  typeDefs: gql`
    ${readFileSync(join(__dirname, "./schema.graphql"), "utf8")}
  `,
  resolvers,
  playground: true,
});

app.use("/graphql", cors(), bodyParser.json());
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

export default app;
