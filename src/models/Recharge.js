import { DataTypes, Model } from "sequelize";

export default class Recharge extends Model {}

export async function initRecharge(sequelize) {
  Recharge.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      station_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "stations",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "recharge",
      tableName: "recharges",
    }
  );
}
