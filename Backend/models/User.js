// User schema (name, email, password, role)
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'receptionist'], default: 'receptionist' },
  token: { type: String, default: null }
});

// Hide sensitive fields in API responses
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.token;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
