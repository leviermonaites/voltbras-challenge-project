import { gql } from "apollo-server";

const typeDefs = gql`
  type SuitablePlanet {
    name: String!
    mass: Float!
    hasStation: Boolean
  }

  type Station {
    id: Int!
    name: String!
    planet: String!
  }

  type User {
    id: Int!
    name: String!
  }

  input UserCredentials {
    name: String!
    password: String!
  }

  type Recharge {
    datetime: String
    user: User
    station: Station
  }

  type Query {
    suitablePlanets: [SuitablePlanet]
  }

  type Mutation {
    installStation(
      name: String!

      "I am assuming a valid planet according to NASA's API"
      planet: String!
    ): Station
    createUser(name: String!, password: String!): User
    recharge(
      "Name of a station that you have already created"
      station: String!

      userCredentials: UserCredentials

      "Example of datetime input: 21 Jun 2021 18:36:45"
      datetime: String!
    ): Recharge
  }
`;

export default typeDefs;
