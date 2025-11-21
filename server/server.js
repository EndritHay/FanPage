import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import User from './models/User.js';
import Event from './models/Event.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const MONGODB_URI = 'mongodb+srv://alihajdari:alihajdari@cluster0.yvxvxvz.mongodb.net/hajductDB?retryWrites=true&w=majority';
const MONGODB_URI = 'mongodb+srv://hajrullahuend_db_user:presheva123@hajductcluster.ha0bov5.mongodb.net/hajductDB?retryWrites=true&w=majority&appName=hajductCluster';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📁 Database:', mongoose.connection.name);
    console.log('🔗 Host:', mongoose.connection.host);
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:');
    console.error('Error details:', err);
    process.exit(1);
  });

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Join Form Route with detailed error handling
app.post('/api/join', async (req, res) => {
  try {
    // Log received data
    console.log('📝 Received registration data:', req.body);

    // Validate required fields
    const requiredFields = ['name', 'age', 'city', 'phone', 'email', 'reason'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      console.log('❌ Missing fields:', missingFields);
      return res.status(400).json({
        error: 'Missing required fields',
        fields: missingFields
      });
    }

    // Create and save new user
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    console.log('✅ User saved successfully:', savedUser);

    res.status(201).json({
      message: 'Registration successful',
      user: savedUser
    });

  } catch (error) {
    console.error('❌ Error saving user:');
    console.error(error);

    // Handle different types of errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: Object.values(error.errors).map(err => err.message)
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        error: 'Duplicate Error',
        message: 'This email is already registered'
      });
    }

    res.status(500).json({
      error: 'Server Error',
      message: 'Internal server error, please try again'
    });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log login attempt
    console.log('🔐 Login attempt for:', email);

    // Find user by email
    const user = await User.findOne({ email });

    // If user doesn't exist or password doesn't match
    if (!user || user.password !== password) {
      console.log('❌ Login failed: Invalid credentials');
      return res.status(401).json({ error: 'Email ose fjalëkalimi i gabuar' });
    }

    console.log('✅ Login successful for user:', user.name);

    // Return user data (except password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      city: user.city
    };

    res.json({
      message: 'Login successful',
      user: userData
    });
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ error: 'Gabim në server. Ju lutemi provoni përsëri.' });
  }
});

// Get all users route
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.message });
  }
});

// ==================== EVENT PROPOSAL ROUTES ====================

// Create new event proposal
app.post('/api/events/propose', async (req, res) => {
  try {
    console.log('📅 Received event proposal:', req.body);

    // Validate required fields
    const requiredFields = ['title', 'description', 'location', 'date'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      console.log('❌ Missing fields:', missingFields);
      return res.status(400).json({
        error: 'Missing required fields',
        fields: missingFields
      });
    }

    // Create and save new event
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();

    console.log('✅ Event saved successfully:', savedEvent);

    res.status(201).json({
      message: 'Event proposal submitted successfully',
      event: savedEvent
    });

  } catch (error) {
    console.error('❌ Error saving event:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: Object.values(error.errors).map(err => err.message)
      });
    }

    res.status(500).json({
      error: 'Server Error',
      message: 'Internal server error, please try again'
    });
  }
});

// Get all events
app.get('/api/events', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};

    const events = await Event.find(filter).sort({ date: 1 });
    console.log(`📋 Fetched ${events.length} events`);

    res.json(events);
  } catch (error) {
    console.error('❌ Error fetching events:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get single event by ID
app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('❌ Error fetching event:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update event status (approve/reject)
app.patch('/api/events/:id/status', async (req, res) => {
  try {
    const { status } = req.body;

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    console.log(`✅ Event ${req.params.id} status updated to: ${status}`);
    res.json(event);
  } catch (error) {
    console.error('❌ Error updating event:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});