import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store, { persistor }  from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>

          <BrowserRouter>
            <App />
          </BrowserRouter>

        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
