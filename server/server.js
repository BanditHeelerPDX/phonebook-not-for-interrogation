const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const { typeDefs, resolvers } = require("./schemas");
const dB = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  dB.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
