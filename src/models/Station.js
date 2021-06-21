import { DataTypes, Error, Model } from "sequelize";

export default class Station extends Model {}

export async function initStation(sequelize) {
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recharge_occurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "station",
      tableName: "stations",
    }
  );
  return this;
}
