module.exports = {
  getHouses: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .getHouses()
      .then(houses => res.status(200).send(houses))
      .catch(() => res.status(500).send());
  },

  createHouse: (req, res) => {
    const dbInstance = req.app.get("db");

    const { name, address, city, state, zipcode } = req.body;

    dbInstance
      .createHouse([name, address, city, state, zipcode])
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  },

  deleteHouseById: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.query;

    dbInstance
      .deleteHouseById([id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
