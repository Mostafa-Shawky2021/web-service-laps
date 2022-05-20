import User from "../models/User.js";

// TODO::CREATE USER CONTROLLER
export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

// TODO::SUSPEND User CONTROLLER
export const suspendUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isSuspended: true } },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// TODO::UNSUSPEND User CONTROLLER
export const unsuspendUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isSuspended: false } },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// TODO::DELETE User CONTROLLER
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};
