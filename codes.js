import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you would typically make a request to your server with the username and password
    // and handle the response. For this example, we'll just simulate a successful login.
    if (username === 'test' && password === 'test') {
      setError(null);
      // Redirect to a protected route or do something else that indicates a successful login
    } else {
      setError('Invalid username or password');
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
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;