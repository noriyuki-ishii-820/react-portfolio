import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Footer />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
