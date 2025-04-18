import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Login Successful:', credentialResponse);

    // ✅ Save login state to localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // ✅ Navigate to Landing Page
    navigate('/landing');
  };

  return (
    <GoogleOAuthProvider clientId="1063350805665-k1pn9sp99mp8l8hlgm8nic10d4qvbi5j.apps.googleusercontent.com">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 to-amber-200 px-4 space-y-10">
        <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 text-center animate-pulse">
          Welcome to C2G
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Login with Google</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log('Login Failed')}
            theme="outline"
            size="large"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginPage;
