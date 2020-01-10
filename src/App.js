import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { router } from './route';
function App() {
  return (
    <div className="App">
      {router()}
    </div>
  );
}

export default App;
