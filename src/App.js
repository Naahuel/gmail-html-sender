import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
