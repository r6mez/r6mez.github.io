import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './fonts/WorkSans-Bold.ttf';
import './fonts/WorkSans-SemiBold.ttf';
import './fonts/WorkSans-Medium.ttf';
import MainPage from './pages/main';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <MainPage />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
