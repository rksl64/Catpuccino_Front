import logo from './logo.svg';
import './App.css';
import Inicio from './Paginas/Inicio/inicio';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
