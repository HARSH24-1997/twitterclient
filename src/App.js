import Homepage from "./Pages/Homepage";
import Auth from "./Pages/Auth";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       {/* <Route to="/Auth" component={Auth}/> */}
       <Route to="/" component={Homepage}/>
     </Switch>
   </Router>
  );
}

export default App;
