import logo from './logo.svg';
import './App.css';

import Todo from "./Componets/Todo"
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className="App">
      {/* < Todo/> */}
      
      <header className="App-header">
      <Calculator/>
      </header>
    </div>
  );
}

export default App;
