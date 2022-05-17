import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('content')
// );

const root = ReactDOM.createRoot(document.getElementById("content"))
root.render(<App></App>)

