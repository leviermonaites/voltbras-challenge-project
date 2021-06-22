import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";

import databaseConfig from "../config/database.js";

import Station, { initStation } from "../models/Station.js";
import User, { initUser } from "../models/User.js";
import Recharge, { initRecharge } from "../models/Recharge.js";

const initialize = () => {
  const { host, port, username: user, password, database } = databaseConfig;

  try {
    setTimeout(async () => {
      // I'm using setTimeout to handle the first the mysql server turns on. I was trying to solve it with docker-compose-wait but didn't manage to do it successfully.
      const connection = await mysql.createConnection({
        host,
        port,
        user,
        password,
      });

      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

      // connect to db
      const sequelize = new Sequelize(databaseConfig);

      // Init Models
      initStation(sequelize);
      initUser(sequelize);
      initRecharge(sequelize);

      // Define relationships.
      User.hasMany(Recharge, {
        foreignKey: "user_id",
      });
      Recharge.belongsTo(User, {
        foreignKey: "user_id",
      });

      Station.hasMany(Recharge, {
        foreignKey: "station_id",
      });
      Recharge.belongsTo(Station, {
        foreignKey: "station_id",
      });

      // sync all models with database
      await sequelize.sync();
    }, 5000);
  } catch (e) {
    console.log(e);
  }
};

initialize();
