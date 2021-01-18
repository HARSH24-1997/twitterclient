import Homepage from "./Pages/Homepage";
import Auth from "./Pages/Auth";
import End from "./Pages/End"; 
import { BrowserRouter , Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
   <BrowserRouter >
     <Switch>
       <Route exact path="/" component={Auth}/>
       <Route exact path="/logincomplete" component={End}/>
       <Route  exact path="/home" component={Homepage}/>
     </Switch>
   </BrowserRouter >
  );
}

export default App;
