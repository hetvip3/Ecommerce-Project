import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

import { Addproduct } from './Components/Addproduct';
import { Updateproduct } from './Components/Updateproduct';
import { Login } from './Components/Login';
import Signup from './Components/Signup';
import PrivateComponents from './Components/PrivateComponents'
import { Products } from './Components/Products';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponents/>} >
          <Route path='/' element={<Products/>}>Products</Route>
          <Route path='Addproduct' element={<Addproduct/>}>Addproduct</Route>
          <Route path='Updateproduct' element={<Updateproduct/>}>Updateproduct</Route>
          <Route path='Login' element={<Login/>}>Login</Route>
          </Route>

          <Route path='Signup' element={<Signup/>}>SignUp</Route>    
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
