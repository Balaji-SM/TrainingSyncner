const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// 🔐 Pre-save hook to hash password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 📢 Post-save hook to log new user
userSchema.post('save', function (doc) {
  console.log(`New user created: ${doc.email}`);
});

// 🔍 Pre-find hook to exclude inactive users
userSchema.pre(/^find/, function (next) {
  this.find({ isActive: true });
  next();
});

// 🧩 Instance method: generate profile
userSchema.methods.generateProfile = function () {
  return {
    name: this.name,
    email: this.email,
    joinedOn: this.createdAt,
    isActive: this.isActive
  };
};

// 📧 Static method: find users by email domain
userSchema.statics.findByEmailDomain = function (domain) {
  return this.find({ email: new RegExp(`@${domain}$`, 'i') });
};

module.exports = mongoose.model('User', userSchema);
