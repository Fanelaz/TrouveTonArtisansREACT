import './App.scss';

import {Routes,Route} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <a href='/'>Home</a>
        <a href='/contact'>Contact</a>
      </nav>


      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
