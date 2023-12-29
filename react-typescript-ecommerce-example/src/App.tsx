import './App.css';
import { useState, useEffect } from 'react';
import StorePage from './components/StorePage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the store!</h1>
      </header>
      <StorePage/>
    </div>
  );
}

export default App;
