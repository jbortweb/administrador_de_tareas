import React from 'react';
import Controls from './Components/Controls';
import TodosList from './Components/TodosList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Controls/>
      <TodosList/>
    </div>
  );
}

export default App;
