const {User} = require('./../models/index')

module.exports = {
  get: async (req, res) => {
    try {
      const user = await User.findAll()
      return res.send({
        message: "User resource",
        data: user
      });
    } catch (error) {
      return res.send({
        errorCode: 500,
        message: error.message,
      });
    }
  },
  post: async (req, res) => {
    const {body} = req;
    // const body = req.body;
    console.log(body);

    const user = await User.create(body);
    return res.status(201).send({
      message: "Create User resource",
      data: user
    });
  },
  put: async (req, res) => {},
  delete: async (req, res) => {},
};
