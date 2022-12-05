import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import AddUser from './components/AddUser';
import Update from './components/Update';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
