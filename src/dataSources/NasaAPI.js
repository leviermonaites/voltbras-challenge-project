import { RESTDataSource } from "apollo-datasource-rest";
import Station from "../models/Station";

class NasaAPI extends RESTDataSource {
  constructor() {
    super();
  }

  async getPlanets() {
    const data = await this.get(
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI",
      "?table=exoplanets&format=json"
    ).then((res) => JSON.parse(res.match(/\[(\n.*)*/g)[0]));

    return data;
  }

  async getSuitablePlanets() {
    const data = await this.getPlanets().then((res) =>
      res
        .filter((exoplanet) => {
          if (exoplanet.pl_bmassj > 10) return exoplanet;
        })
        .map((planet) => ({
          name: planet.pl_hostname,
          mass: planet.pl_bmassj,
          hasStation: this.getPlanetHasStation(planet.pl_hostname),
        }))
    );

    return data;
  }

  async getPlanetHasStation(planetName) {
    const data = await Station.findOne({
      where: { planet: planetName },
    });

    return data ? true : false;
  }
}

export default NasaAPI;
