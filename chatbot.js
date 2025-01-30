// Function to send the message and get the response from the backend
function sendMessage() {
    const userMessage = document.getElementById('chat-input').value;
    const chatBody = document.getElementById('chat-body');
    
    if (userMessage.trim() !== '') {
        // Display user's message in the chat
        chatBody.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        document.getElementById('chat-input').value = ''; // Clear input

        // Send message to the backend via fetch API
        fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            const botResponse = data.response;
            chatBody.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
        })
        .catch(error => {
            console.error('Error:', error);
            chatBody.innerHTML += `<p><strong>Chatbot:</strong> Something went wrong. Please try again later.</p>`;
        });
    }
}
