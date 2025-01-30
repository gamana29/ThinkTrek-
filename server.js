const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple chatbot logic
const getBotResponse = (userMessage) => {
  // Define simple responses based on user input
  if (userMessage.toLowerCase().includes('hello')) {
    return "Hello! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes('quiz')) {
    return "I see you're interested in quizzes! You can take the quiz of the day above!";
  } else {
    return "I'm sorry, I didn't quite understand that. Can you rephrase?";
  }
};

// Endpoint for sending messages
app.post('/chat', (req, res) => {
  const { message } = req.body;

  // Get chatbot's response
  const botResponse = getBotResponse(message);

  // Send response back to frontend
  res.json({ response: botResponse });
});

// Start the server
app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});
