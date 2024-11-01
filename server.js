const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

// CORS options
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'], // Specify allowed headers
};

// Use the CORS middleware with specified options
app.use(cors(corsOptions));

// Middleware to parse JSON data
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/lesson_one.html'); // Redirect to lesson_one.html
});

// Handle POST request from form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form data received:', { name, email, message });
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
