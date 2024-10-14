const mongoose = require('mongoose');

// Kullanıcı şeması oluşturma
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Şemayı modele çevir
const User = mongoose.model('User', userSchema);

module.exports = User;
