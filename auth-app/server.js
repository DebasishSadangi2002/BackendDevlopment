
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const User = require('./models/User');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://mongo:NsirlpVQZHBlfbXdZnlhbQGUaesIpNRN@junction.proxy.rlwy.net:17713', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Sessions
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://mongo:NsirlpVQZHBlfbXdZnlhbQGUaesIpNRN@junction.proxy.rlwy.net:17713' }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// Routes
app.get('/', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.render('dashboard', { user: req.session.user });
  } else {
    res.redirect('/');
  }
});

app.post('/register', async (req, res) => {
    const { email, password, confirmPassword } = req.body;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.render('register', { error: 'Passwords do not match' });
    }
  
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('register', { error: 'User already exists' });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create and save the new user
    const newUser = new User({
      email,
      password: hashedPassword
    });
  
    await newUser.save();
  
    // Redirect to login after successful registration
    res.redirect('/login');
  });
  

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) {
      // User does not exist
      return res.render('login', { error: 'User does not exist' });
    }
  
    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      // Password is incorrect
      return res.render('login', { error: 'Incorrect password' });
    }
  
    // Password is correct
    req.session.user = user;
    res.redirect('/dashboard');
  });
  

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
