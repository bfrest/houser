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
    const { name, address, city, state, zipcode, image, monthly_mortgage, desired_rent } = req.body;

    dbInstance
      .createHouse([name, address, city, state, zipcode, image, monthly_mortgage, desired_rent])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
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
