import Service from './models/serviceModel.js';
import User from './models/userModel.js';
import mongoose from 'mongoose';

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

    request.json(serviceRes);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function getMemberships(req, res) {
  try {
    const order = req.query.order;
    const typeArr = req.query.typeList;

    const services = await Service.find({ type: { $in: typeArr } }).sort({
      age: order,
    });
    request.json(services);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}
