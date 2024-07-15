// src/pages/SignIn.js
/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = isRegister
        ? await axios.post('/api/auth/register', { email, password, firstName, lastName })
        : await axios.post('/api/auth/login', { email, password });

      if (response.data.success) {
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="signin-container">
      <h2>{isRegister ? 'Inscription' : 'Connexion'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">
          {isRegister ? 'S\'inscrire' : 'Se connecter'}
        </button>
      </form>
      <p>
        {isRegister ? 'Vous avez déjà un compte ?' : 'Vous n\'avez pas de compte ?'}
        <span onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? ' Se connecter' : ' S\'inscrire'}
        </span>
      </p>
    </div>
  );
};

export default SignIn;

*/
// src/components/SignIn.js
// src/components/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add authentication logic here
    // On success, navigate to the home page
    navigate('/');
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
