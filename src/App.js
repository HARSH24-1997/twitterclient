import Homepage from "./Pages/Homepage";
import Auth from "./Pages/Auth";
import End from "./Pages/End"; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route to="/" component={Auth}/>
       <Route to="/logincomplete" component={End}/>
       <Route to="/home" component={Homepage}/>
     </Switch>
   </Router>
  );
}

export default App;
