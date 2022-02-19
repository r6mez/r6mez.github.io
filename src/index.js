import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './fonts/WorkSans-Bold.ttf';
import './fonts/WorkSans-SemiBold.ttf';
import './fonts/WorkSans-Medium.ttf';
import MainPage from './pages/main';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
