import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/themeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <ThemeProvider>
 <body className="bg-white dark:bg-neutral-900">
    <App />
  </body>
  </ThemeProvider>
  </>
);

