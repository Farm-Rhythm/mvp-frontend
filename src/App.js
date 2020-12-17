import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import './App.css'


const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
