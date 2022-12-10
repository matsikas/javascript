const fetch = require('node-fetch');

// Replace with your OpenAI API key
const API_KEY = "";

async function generateText(prompt, model) {
  // Set the request parameters
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt,
      model
    })
  };

  // Make the API call to the OpenAI API
  const response = await fetch('https://api.openai.com/v1/completions', options);

  // Return the generated text from the response
  return response.json().then(response => response.choices[0].text);
}

// Generate text using the GPT-3 model
generateText('Hello, world!', 'text-davinci-002').then(text => {
  console.log(text);
});
