import React from 'react';
import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Profile from './pages/Profile'
import Search from './pages/Search'
import NotificationSmall from './pages/NotificationSmall'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'



const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/sign" component={Sign} />
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/notification" component={NotificationSmall} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
