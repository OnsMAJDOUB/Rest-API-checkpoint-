
const User = require("../models/user"); 

exports.test = async (req, res) => {
  try {
    res.status(200).send("Test successful!");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, age } = req.body; 
    const newUser = new User({ name, email, age }); 
    await newUser.save();
    res.status(200).send({ message: "User added successfully!", newUser }); 
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { _id } = req.params;
    const foundUser = await User.findById(_id)
    res.status(200).send({msg:'user fetched successfully', foundUser});
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.query
    await User.findByIdAndDelete(_id);
    res.status(200).send({ msg: "user deleted successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.query;
    const { name, email, age } = req.body;
    await User.findByIdAndUpdate({_id},{name, email, age});
    res.status(200).send({ msg: "user updated successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getUsersByName = async (req, res) => {
  try {
    const { name } = req.query; 
    const users = await User.find({ name: { $regex: name, $options: "i" } });

    if (users.length === 0) {
      return res
        .status(404)
        .send({ msg: "No users found with the provided name." });
    }

    res.status(200).send({ msg: "Users fetched successfully!", users });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "An error occurred while fetching users.", error });
  }
};
