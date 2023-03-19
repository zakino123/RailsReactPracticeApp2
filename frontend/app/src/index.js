import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingList from './ShoppingList';
import UserList from './UserList';
import reportWebVitals from './reportWebVitals';
import Game from './UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <ShoppingList />
  //   <UserList />
  // </React.StrictMode>
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
