import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Employee from './components/Employee';

function App() {
  return (
     <BrowserRouter>
     <Routes>
     <Route path='/' exact element={<Home/>}></Route>
     <Route path='/employee' exact element={<Employee/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
