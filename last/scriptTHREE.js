const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

//  sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    appendMessage('You', userMessage);

    // Call function to generate bot response
    generateBotResponse(userMessage)
      .then(response => {
        appendMessage('Bot', response);
      })
      .catch(error => {
        console.error('Error:', error);
        appendMessage('Bot', 'Sorry, something went wrong.');
      });

    userInput.value = '';
  }
}

async function generateBotResponse(userMessage) {
  // Call OpenAI API to generate bot response
  const apiKey = "sk-proj-x0eiv48Ikw1XEma2o4LVT3BlbkFJNlifJQNrSIIruSsNbP7d";
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'text-davinci-002', // Choose your desired model
      prompt: userMessage,
      max_tokens: 50 // Adjust the max tokens as needed
    })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response from OpenAI API');
  }

  const data = await response.json();
  return data.choices[0].text.trim();
}

document.getElementById('redirectBtn').addEventListener('click', function() {
  window.location.href = 'https://mediafiles.botpress.cloud/4a12558f-d418-4487-8e82-6b33cc399846/webchat/bot.html'; 
});



function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = `${sender}: ${message}`;
  chatLog.appendChild(messageElement);
}
