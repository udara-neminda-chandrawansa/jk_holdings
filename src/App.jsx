import { Route } from "wouter";
import Nav from "./components/Nav";
import Landing from "./Landing";
import Footer from "./components/Footer";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Route path="/" component={Landing} />
      <Route path="/contact" component={Contact} />
      <Route path="/aboutus" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Footer></Footer>
    </div>
  );
}

export default App;
