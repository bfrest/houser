module.exports = (req, res, next) => {
  const { session } = req;
  if (!session.user) {
    session.user = { username: "", id: "" };
  }

  next();
};
