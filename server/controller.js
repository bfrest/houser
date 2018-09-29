module.exports = {
  getHouses: (req, res) => {
    const dbInstance = req.app.get("db");
    const userId = req.session.id;
    console.log(userId);
    dbInstance
      .getHouses()
      .then(houses => res.status(200).send(houses))
      .catch(() => res.status(500).send());
  },

  createHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zipcode, image, monthly_mortgage, desired_rent } = req.body;

    const userId = req.session.id;

    dbInstance
      .createHouse([name, address, city, state, zipcode, image, monthly_mortgage, desired_rent, userId])
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
  },

  getHomesByUserId: (req, res) => {
    const dbInstance = req.app.get("db");
    const userId = req.session.id;
    console.log(userId);
    // use this to get house that with a userId 'vc0Qscy-BWrjKTGI5-JUU-HunJomg-vd'
    dbInstance
      .getHomesByUserId([userId])
      .then(homes => console.log(homes))
      .catch(() => res.status(500).send());
  }
};
