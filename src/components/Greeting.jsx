import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())} style={{
        backgroundColor: 'teal',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer'
      }}>
        New Greeting
      </button>
    </div>
  );
}