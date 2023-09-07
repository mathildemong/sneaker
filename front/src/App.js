import React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
  <div className="App">
    <Router>
<NavBar/>
<Routes>
  <Route path="/" exact Component={Home}/>
  <Route path="/menu" exact Component={Menu}/>
 <Route path="/login"exact Component={Login}/>
 <Route path="/cart"exact Component={Cart}/>
</Routes>
<Footer/>
</Router>
    </div>
  );
}

export default App;
