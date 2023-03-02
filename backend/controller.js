import User from './models/userModel.js';
import Service from './models/serviceModel.js';
import mongoose from 'mongoose';

export async function createMembership(req, res) {
  try {
    const { name, price, description } = req.body;

    const service = {
      name,
      price,
      description,
    };
    console.log(service);
    const serviceRes = await Service.create(service);

    res.json(serviceRes);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function createUser(req, res) {
  try {
    const { name, surname, email, membershipSelect } = req.body;

    const membershipId = await Service.findOne({ name: membershipSelect });

    const user = await User.create({
      name,
      surname,
      email,
      membershipId: mongoose.Types.ObjectId(membershipId),
    });

    const membership = await Service.findById(membershipId);
    membership.users.push(mongoose.Types.ObjectId(user._id));
    membership.save();

    res.json(user);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function getMemberships(req, res) {
  try {
    const memberships = await Service.find().populate('');

    res.json(memberships);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const { order } = req.query;
    const users = await User.find()
      .populate('membershipId', 'name')
      .sort({ name: order });

    res.json(users);
  } catch (e) {
    res.status(500).json({ e });
  }
}

export async function deleteMembership(req, res) {
  try {
    const { id } = req.query;
    console.log(id);
    const membership = await Service.findByIdAndDelete(id);

    res.json(membership);
  } catch (e) {
    console.log(e);
    res.status(500).json({ e });
  }
}
