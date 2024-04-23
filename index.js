import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you would typically make a request to your server with the username, email, and password
    // and handle the response. For this example, we'll just simulate a successful signup.
    if (username && email && password) {
      setError(null);
      // Redirect to a protected route or do something else that indicates a successful signup
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
