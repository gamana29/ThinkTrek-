// Import required packages
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config(); // This loads the environment variables from the .env file

const app = express();
const port = 3000;

// Retrieve the API key from environment variables
const API_KEY = process.env.API_KEY;

// Route to fetch quiz data (replace with your actual API URL)
app.get('/api/quiz', async (req, res) => {
    try {
        // Make an API call using the API key
        const response = await fetch(`https://api.example.com/getQuiz?apiKey=${API_KEY}`);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch quiz data');
        }

        // Parse and return the JSON data from the API
        const data = await response.json();
        res.json(data);

    } catch (error) {
        // Handle errors and send an error response
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
