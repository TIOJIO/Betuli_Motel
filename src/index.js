
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";
import LogIn from './Pages/LogIn/LogIn';
import SignIn from './Pages/SignIn/SignIn';
import Reservations from './Pages/Reservations/Reservations'
import ChambreInfo from './Pages/ChambreInfo/ChambreInfo';
import AdminLayout from "layouts/Admin.js";
import Home from './Pages/Home/HomePage'
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.setMaxListeners(15);
  
ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route path="/login" component={LogIn}/>
       <Route path="/signin" component={SignIn}/>
       <Route path="/reservations" component={Reservations}/>
       <Route path="/chambreinfo/:id" component={ChambreInfo}/>
       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
       <Home/> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);



serviceWorker.unregister();