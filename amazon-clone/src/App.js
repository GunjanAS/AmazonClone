import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from"./Home.js"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise=loadStripe('pk_test_51HeE65KFwEixdosaO8p7hXAL85ayoalxLWVpi9DxbWb3cCJ5De3SqZs4dE8NPlwyLckQ8jfI3NP0G9MrX1n7N1X300VTvnySU3');

function App() {
  const[{},dispatch]= useStateValue();
  useEffect(()=>{
auth.onAuthStateChanged(authUser =>{
  console.log('the user is >>>', authUser);

  if(authUser)
  {
    dispatch(
      {
        type:'SET_USER',
        user:authUser
      }
    )
  }
  else{
    dispatch( {type:'SET_USER',
    user:null}
    )

  }
})
},[])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/payment">
            <Header/> {/*redering header component from header.js file*/}
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>
          <Route path="/">
            <Header/> {/*redering header component from header.js file*/}
            <Home/>
          </Route>
          
        </Switch>
      
      </div>

    </Router>
    
  );
}

export default App;
