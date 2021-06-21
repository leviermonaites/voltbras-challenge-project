import bcryptjs from "bcryptjs";
import { DataTypes, Model } from "sequelize";

export default class User extends Model {}

export async function initUser(sequelize) {
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password_hash: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          len: {
            args: [6, 20],
            msg: "Password must have a length between 6 to 20 characters",
          },
        },
      },
      making_recharge: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
    }
  );

  User.addHook("beforeSave", async (user) => {
    if (user.password) {
      user.password_hash = await bcryptjs.hash(user.password, 10);
    }
  });

  return this;
}
