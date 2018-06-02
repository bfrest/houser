module.exports = {
  getHouses: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .getHouses()
      .then(houses => res.status(200).send(houses))
      .catch(() => res.status(500).send());
  }
};
