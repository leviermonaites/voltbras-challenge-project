import SecurityHelper from "../classHelpers/SecurityHelper";
import Recharge from "../models/Recharge";
import Station from "../models/Station";
import User from "../models/User";

export default class RechargeController {
  constructor() {
    this.securityHelper = new SecurityHelper();
  }

  async store(args) {
    const rechargeTime = this.getRechargeTime(args.datetime);
    if (rechargeTime < 0)
      return new Error("Cannot make a recharge in the past");
    else if (rechargeTime < 1000 * 20)
      return new Error("Recharge time too short");

    const station = await Station.findOne({
      where: { name: args.station },
    });
    const user = await User.findOne({
      where: { name: args.userCredentials.name },
    });

    if (!station || !user) return new Error("Invalid data");

    if (user.making_recharge)
      return new Error("User is already making a recharge, please wait");
    if (station.recharge_occurring) return new Error("Station occupied");

    if (
      !(await this.securityHelper.authenticateUser(
        args.userCredentials.password,
        user.password_hash
      ))
    )
      return new Error("Invalid user's credentials");

    const data = await Recharge.create(
      {
        datetime: args.datetime,
        user_id: user.id,
        station_id: station.id,
      },
      {
        attributes: ["datetime"],
      }
    ).then((res) => ({
      datetime: res.dataValues.datetime,
      user,
      station,
    }));

    await station.update({ recharge_occurring: true });
    await user.update({ making_recharge: true });

    this.makeRecharge({
      station_id: station.id,
      user_id: user.id,
      rechargeTime,
    });

    return data;
  }

  async makeRecharge(args) {
    return new Promise(() => {
      setTimeout(async () => {
        Station.update(
          { recharge_occurring: false },
          { where: { id: args.station_id } }
        );

        User.update(
          { making_recharge: false },
          { where: { id: args.user_id } }
        );
      }, args.rechargeTime);
    });
  }

  getRechargeTime(datetime) {
    const dateNow = Date.now();
    const parsedDateTime = Date.parse(datetime);
    return parsedDateTime - dateNow;
  }
}
