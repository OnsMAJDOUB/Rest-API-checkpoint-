// Require express and router
const express = require("express");
const router = express.Router();

// Require controller functions
const {
  test,
  addUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  getUsersByName,
} = require("../controllers/userController");

// Test route
router.get("/test", test);

// Route to add a new user
router.post("/add_user", addUser);

// Route to get all users
router.get("/get_users", getAllUsers);

// Route to get a user by ID
router.get("/get_user/:_id", getUserById);

// Route to delete a user
router.delete("/delete_user", deleteUser);

// Route to update a user
router.put("/update_user", updateUser);
 // get user by name 
 router.get("/get_user_by_name", getUsersByName);  

// Export the router
module.exports = router;
