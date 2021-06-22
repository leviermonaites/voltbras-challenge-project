const resolvers = {
  Query: {
    suitablePlanets: (_, __, { dataSources }) =>
      dataSources.nasaAPI.getSuitablePlanets(),
    stations: (_, __, { dataSources }) =>
      dataSources.stationController.getStations(),
  },

  Mutation: {
    installStation: (_, args, { dataSources }) =>
      dataSources.stationController.store(args),
    createUser: (_, args, { dataSources }) =>
      dataSources.userController.store(args),
    recharge: (_, args, { dataSources }) =>
      dataSources.rechargeController.store(args),
  },
};

export default resolvers;
