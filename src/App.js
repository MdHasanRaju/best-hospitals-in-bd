import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <h2 className="text-danger">This is apps</h2>
     <Home></Home>
      <Router>
      <Header></Header>

      </Router>
    </div>
  );
}

export default App;
