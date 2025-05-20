import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
import "./assets/styles/Global/global.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

