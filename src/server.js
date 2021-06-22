import { ApolloServer } from "apollo-server";

import "./database";

// Apollo config
import resolvers from "./apollo/resolvers";
import typeDefs from "./apollo/typeDefs";

// Data sources
import NasaAPI from "./dataSources/NasaAPI.js";
import StationController from "./dataSources/Station.js";
import UserController from "./dataSources/User.js";
import RechargeController from "./dataSources/Recharge.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    nasaAPI: new NasaAPI(),
    stationController: new StationController(),
    userController: new UserController(),
    rechargeController: new RechargeController(),
  }),
});

setTimeout(async () => {
  // I wrote the reason why I use the setTimeout on the database initialization.
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}, 7500);
