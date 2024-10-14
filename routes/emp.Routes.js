const express = require('express');
const router = express.Router();

// Örnek çalışan rotası - tüm çalışanları listele
router.get('/employees', (req, res) => {
  // Burada bir veri tabanı sorgusu çalıştırabilirsiniz
  res.json([
    {
      employee_id: '1',
      first_name: 'John',
      last_name: 'Doe',
      position: 'Software Engineer',
      department: 'Engineering'
    },
    {
      employee_id: '2',
      first_name: 'Jane',
      last_name: 'Smith',
      position: 'Product Manager',
      department: 'Product'
    }
  ]);
});

// Yeni bir çalışan oluşturma rotası
router.post('/employees', (req, res) => {
  const newEmployee = req.body;
  // Burada yeni çalışanı veri tabanına ekleme işlemi yapabilirsiniz
  res.status(201).json({ message: 'Çalışan başarıyla oluşturuldu', employee: newEmployee });
});

// Belirli bir çalışanın bilgilerini getirme rotası
router.get('/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  // Burada çalışanı veri tabanından ID ile sorgulayabilirsiniz
  res.json({
    employee_id: employeeId,
    first_name: 'John',
    last_name: 'Doe',
    position: 'Software Engineer',
    department: 'Engineering'
  });
});

// Belirli bir çalışanın bilgilerini güncelleme rotası
router.put('/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  const updatedEmployee = req.body;
  // Burada çalışanı veri tabanında güncelleyebilirsiniz
  res.json({ message: 'Çalışan bilgileri güncellendi', employee: updatedEmployee });
});

// Belirli bir çalışanı silme rotası
router.delete('/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  // Burada çalışanın veri tabanından silinme işlemi yapılabilir
  res.status(204).json({ message: 'Çalışan başarıyla silindi' });
});

module.exports = router;
