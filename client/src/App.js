import React, { createContext, useReducer } from 'react'
import Nevbar from "./components/nevbar/Nevbar"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import Errorpage from "./components/errorpage/Errorpage"
import Logout from "./components/logout/Logout"
import "./App.css"
import {initialState , reducer} from "./reducers/useReducers"

import {Route, Switch} from "react-router-dom";

export const UserContext = createContext();

const Routing = () =>{
   return(
    <Switch>
    <Route exact path="/">
       <Home />
    </Route>
    <Route exact path="/contact">
       <Contact />
    </Route>
    <Route exact path="/about">
       <About />
    </Route>
    <Route exact path="/login">
       <Login />
    </Route>
    <Route exact path="/signup">
       <Signup />
    </Route>
    <Route exact path="/logout">
       <Logout />
    </Route>

    <Route>
         <Errorpage />
    </Route>
    </Switch>
   )
}

function App() {
   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
       <UserContext.Provider value={{state , dispatch}}>
           <Nevbar />
           <Routing />
       </UserContext.Provider>
      
    </div>
  )
}

export default App
