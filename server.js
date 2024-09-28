const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// ตั้งค่า Storage Engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// กำหนดการอัปโหลดไฟล์
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // ขนาดไฟล์สูงสุด 1MB
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }
}).single('recipeImage');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ msg: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ msg: 'No file selected!' });
      } else {
        res.status(200).json({
          msg: 'File uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});

// กำหนดให้โฟลเดอร์ 'uploads' สามารถเข้าถึงได้จาก URL
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));