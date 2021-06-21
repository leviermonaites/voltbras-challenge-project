import User from "../models/User";

class UserController {
  constructor() {}

  async store({ name, password }) {
    const userExists = await User.findOne({
      where: { name },
    });

    if (userExists) return new Error("User already exists");

    const data = await User.create(
      { name, password },
      { attributes: ["id", "name"] }
    );

    return data;
  }

  async show({ name }) {
    const data = await User.findOne({
      where: name,
      attributes: ["id", "name"],
    });

    if (!data) return { id: null, name: null }; // If a user is not found.

    return data;
  }
}

export default UserController;
