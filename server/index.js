const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const url = 'mongodb://localhost:27017/career_crafter_db';

mongoose.connect(url);

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

connection.once('open', () => {
    console.log('MongoDB database connected successfully');
});
