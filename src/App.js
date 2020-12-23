import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'


const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
