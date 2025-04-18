import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
// This is the main entry point of the React application. It sets up the routing for the application using React Router.
// The App component wraps the application in a BrowserRouter, which enables routing capabilities.
// The AppRoutes component is imported and used to define the application's routes.
// The BrowserRouter component is used to enable client-side routing in the application.
// The App component is exported as the default export, allowing it to be used in other parts of the application.
// The App component is the main entry point of the React application. It sets up the routing for the application using React Router.