import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success!', data);
    })
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          inputMode="email"
          autoComplete="username"
          onChange={handleEmailChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={handlePassword}
        />
      </fieldset>
      <button type="submit">Login</button>
    </form>
  );
}
