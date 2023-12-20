const { User } = require("../models");

module.exports = {
  //create a single user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //get all users
  getUser(req, res) {

    User.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  //get a single user
  getSingleUser(req, res) {
    User
      .findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //updateUser
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !thought
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(() => res.json({ message: 'User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
