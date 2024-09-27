const express = require('express');
const path = require('path');
const app = express();

// Serve static assets like CSS, JS, and images from /assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve index.html for all /quiz1 routes (including profile, hometown, etc.)
app.get('/quiz1*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
