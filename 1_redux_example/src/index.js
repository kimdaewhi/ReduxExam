import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './app/store';        // Redux 스토어
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Provider라는 컴포넌트는 React Redux에서 제공하는 컴포넌트로 
   * 애플리케이션의 상태 스토어를 하위 컴포넌트에 제공하는 역할을 한다.
   * >> 때문에 전역으로 상태를 관리하는 store를 사용하기 위해서는 이 Provider 컴포넌트로 감싸줘야 함!
   */
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
