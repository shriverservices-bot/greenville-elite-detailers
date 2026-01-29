
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log("Starting App...");
try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("App mounted");
} catch (e) {
  console.error("Failed to mount app:", e);
  document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>Failed to mount app</h1><pre>${e}</pre></div>`;
}
