import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  service_id: {
    type: Number,
  },
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
