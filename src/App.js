import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
