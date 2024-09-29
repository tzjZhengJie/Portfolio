// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware to serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve the main HTML file from the 'html' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the project HTML file from the 'html' directory
app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'project.html'));
});

app.get('/BikeStores', (req, res) => {
  res.sendFile(path.join(__dirname, 'BikeStores.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});