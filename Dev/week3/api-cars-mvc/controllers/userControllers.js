const e = require("express");
const { findById } = require("../models/userModel");
const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const allUsers = User.getAll();
  res.json(allUsers);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body });
  if(newUser){
    res.json(newUser);
  }else{
  res.status(500).json({ message: "Error while trying to create new user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if(user){
    res.json(user);
  }else{
    res.status(404).json({ message: "Failed to find user" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, {...req.body});

if(updatedUser){
  res.json(updatedUser);
}else{
  res.status(404).json({ message: "Failed to update user" });
}
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId,{...req.body})
  if(isDeleted){
    res.json({message:"Deleted User"});
  }else{
    res.status(404).json({message:"Falied to delete"});
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
