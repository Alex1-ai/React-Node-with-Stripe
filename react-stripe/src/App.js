import { Routes,  Router} from "react-router-dom"
import Pay from "./Pay"
import Success from "./Success"
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Pay/> } />
        <Route path="/success" element={ <Success/> } />
        
      </Routes> 
    </div>

   

  );
}

export default App;
