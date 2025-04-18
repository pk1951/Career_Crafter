  const express = require('express');
  const mongoose = require('mongoose');
  const bodyParser = require('body-parser');
  const bcrypt = require('bcrypt');
  const cors = require('cors');

  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(bodyParser.json());
  app.use(cors());

  mongoose.connect('mongodb://0.0.0.0:27017/career_crafter_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
  });

  const User = mongoose.model('User', userSchema);


  app.post('/api/signup', async (req, res) => {
    const { username, email, phone, password, confirm_password } = req.body;
    console.log('Received signup request:', req.body);

    if (password !== confirm_password) {
      console.log('Passwords do not match');
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      phone: phone,
      password: hashedPassword, 
    });

    try {
      await newUser.save();
      res.status(201).json({ message: 'User saved successfully!' });
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Error saving user' });
    }
  });

  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body; 
    console.log('Received login request:', req.body);

    try {
      const user = await User.findOne({ email: email });

      if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          res.status(200).json({ success: true, message: 'Login successful!' });
        } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Error during login' });
    }
  });

  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
