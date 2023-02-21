import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const serviceModel = mongoose.model('services', serviceSchema);

export default serviceModel;
