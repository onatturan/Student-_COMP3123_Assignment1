const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // CORS ekle
const userRoutes = require('./routes/user.Routes'); // Kullanıcı route'ları
const empRoutes = require('./routes/emp.Routes');   // Çalışan route'ları

const app = express();

// CORS middleware
app.use(cors());

// JSON parse işlemi için middleware
app.use(express.json());

// Kullanıcı rotalarını ekle
app.use('/api/v1/user', userRoutes);

// Çalışan rotalarını ekle
app.use('/api/v1/emp', empRoutes);

// Basit bir test rotası
app.get('/', (req, res) => {
  res.send('API çalışıyor');
});

// Sunucuyu dinlemeye başlat
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
});

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/comp3123_assignment1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB bağlantısı başarılı'))
.catch((err) => console.log('MongoDB bağlantı hatası: ', err)); 
