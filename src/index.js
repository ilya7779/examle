import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'

// let messageNameData = [
//   {id: '1', name: "Ilya"},
//   {id: '2', name: "Anna"},
//   {id: '3', name: "Vladislav"},
// ]
//
// let messageTextData = [
//   {id: 1, text: "It's me"},
//   {id: 2, text: "Hello"},
//   {id: 3, text: "Yo"},
// ]
//
// let posts = [
//   {id: 1, message: "Мой пост1", likesCount: 11},
//   {id: 2, message: "Мой пост2", likesCount: 21},
//   {id: 3, message: "Мой пост3", likesCount: 31},
//   {id: 4, message: "Мой пост4", likesCount: 41},
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
