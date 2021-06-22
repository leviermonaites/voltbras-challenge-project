import Station from "../models/Station";

class StationController {
  constructor() {}

  async store(args) {
    const stationExists = await Station.findOne({
      where: { name: args.name },
    });

    const planetAlreadyHasStation = await Station.findOne({
      where: { planet: args.planet },
    });

    if (stationExists) return new Error("Station already exists!");
    if (planetAlreadyHasStation) return new Error("Planet already has station");

    const data = await Station.create(args, {
      attributes: ["id", "name", "planet"],
    });

    return data;
  }

  async getStations() {
    const data = await Station.findAll();
    return data;
  }
}

export default StationController;
