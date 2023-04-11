import './App.css';
import Header from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Box from './Components/Main/Box/Box';
import About from './Components/Main/About/About';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Box' element={<Box/>}/>
          <Route path='/About' element={<About/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
