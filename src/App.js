import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </div>

      </Router>
      
    </div>
  );
}

export default App;
