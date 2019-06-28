import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Privacy from "./Privacy";


function App() {
 return (
   <Router>
     <div>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/Aboutus" component={Aboutus} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/Privacy" component={Privacy} />
     </div>
   </Router>
 );
}

export default App;
