import Service from './models/serviceModel.js';
import User from './models/userModel.js';

export async function createMembership(req, res) {
  try {
    const { id, name, price, description } = req.body;

    const service = {
      id,
      name,
      price,
      description,
    };

    const serviceRes = await Service.create(service);

    res.json(serviceRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
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

export async function deleteMembership(req, res) {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// User router

export async function createUser(req, res) {
  try {
    const { name, email, surname } = req.body;
    const user = new User({
      name,
      surname,
      email,
    });
    const userRes = await user.save();
    res.json(userRes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsersOrder(req, res) {
  try {
    const order = req.query.order;
    const typeArr = req.query.typeList;

    const users = await User.find({ type: { $in: typeArr } }).sort({
      name: order,
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
