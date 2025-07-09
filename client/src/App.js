import React, { useState } from 'react';
import { ClerkProvider, RedirectToSignIn, useClerk, useUser } from '@clerk/nextjs';
import { Button } from './components/Button';

function App() {
  const { isSignedIn, user } = useUser();
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // Handle user login if not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // Handle sending a message
  const handleAsk = async () => {
    // Placeholder for API call logic, replace with actual backend integration
    try {
      const res = await fetch('https://outrankai.onrender.com/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.response); // Assuming API response has 'response' field
    } catch (error) {
      setResponse('Error: Could not get a response.');
    }
  };

  return (
    <div className="App">
      <h1>Welcome to OutrankAI</h1>
      <h2>Hello, {user.firstName}!</h2>

      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          rows="4"
          cols="50"
        />
      </div>

      <div>
        <Button onClick={handleAsk}>Ask AI</Button>
      </div>

      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
