import { Route } from "react-router-dom";
import ContactView from "./pages/Contact";


const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Route path='/contact' component={ContactView} />
    </div>
  );
};

export default App;
