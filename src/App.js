import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Slip1/Home';
import Profile from './Component/Slip1/Profile';
import Bar from './Component/Slip1/Bar';
import Dropdown from './Component/Slip2/Dropdown';
import Toggle from './Component/Slip3/Toggle';
import Lifecycle from './Component/Slip4/Lifecycle';
import Todo from './Component/Slip5/Todo';
import Login from './Component/Slip6/Login';
import Notfound from './Component/Slip6/Notfound';
import Counter from './Component/Slip7/Counter';
import Hom from './Component/Slip8/Hom';
import About from './Component/Slip8/About';
import Product from './Component/Slip8/Product';
import Order from './Component/Slip8/Order';
import Notfoun from './Component/Slip8/Notfoun';
import Navbar from './Component/Slip8/Navbar';
import Ref from './Component/Slip9/Ref';
import Count from './Component/Slip10/Count';
import Inout from './Component/Slip11/Inout';
import Effectcount from './Component/Slip12/Effectcount';
import Arraymerg from './Component/Slip13/Arraymerg';

function App() {
  return (
    <>
      {/* Slip1 */}
      {/* <Router>
          <Bar/>
        <Routes>
          <Route path='/Home'element={<Home/>}></Route>
          <Route path='/Profile'element={<Profile/>}></Route>
        </Routes>
      </Router> */}
          
      {/* Slip2 */}
      {/* <Dropdown/> */}

      {/* Slip3 */}
      {/* <Toggle/> */}

      {/* Slip4 */}
      <Lifecycle/>

      {/* Slip5 */}
      {/* <Todo/> */}

      {/* Slip6 */}
      {/* <Router>
        <Routes>
          <Route path='/Login'element={<Login/>}></Route>
          <Route path='*'element={<Notfound/>}></Route>
        </Routes>
      </Router> */}

      {/* Slip7 */}
      {/* <Counter num={0}/> */}

      {/* Slip8 */}
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Hom/>}></Route>
          <Route path='/About'element={<About/>}></Route>
          <Route path='/Product'element={<Product/>}></Route>
          <Route path='/Order'element={<Order/>}></Route>
          <Route path='*'element={<Notfoun/>}></Route>
        </Routes>
      </Router> */}

      {/* Slip9 */}
      {/* <Ref/> */}

      {/* Slip10 */}
      {/* <Count/> */}

      {/* Slip11 */}
      {/* <Inout/> */}

      {/* Slip12 */}
      {/* <Effectcount/> */}

      {/* Slip13 */}
      {/* <Arraymerg/> */}
    </>
  );
}

export default App;
