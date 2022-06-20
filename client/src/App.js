import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";

// import { Routes ,Route } from 'react-router-dom';


import {
  BrowserRouter,
  Routes,
  Route,
  Link
  
} from "react-router-dom";



function App() {
  const user = false;
  return (
    <BrowserRouter>
    <TopBar />
     <Routes>
       <Route path="/Home"
       element={<Home/>}>
          </Route>

          <Route path="/Register"
       element={user ? <Home/> :<Register/>}>
          </Route>

         <Route path="/Login"
         element={user ? <Home/> :<Login/>}>
       </Route>

       <Route path="/Write"
         element={user ? <Write/> :<Register/>}>
       </Route>

       <Route path="/post/:123"
         element={<Single/>}>
       </Route>



<Route path="/"
       element={<Login/>}></Route>

       
         
</Routes>
    </BrowserRouter> 
  );
}

export default App;
