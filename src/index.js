import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import CartProvider from './providers/cart'

import './index.css';
import App from './App';

ReactDOM.render(
  <CartProvider>
      <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
</Provider>
          </CartProvider>

  ,


  // <PersistGate persistor={persistor}>
  // </PersistGate>

  document.getElementById('root')
);
