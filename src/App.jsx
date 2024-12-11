import { Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Nav from "./components/Nav";
import Landing from "./Landing";
import Footer from "./components/Footer";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import CSR from "./CSR";
import SingleService from "./SingleService";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Router hook={useHashLocation}>
        <Route path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutus" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/csr" component={CSR} />
        <Route path="/services/:name">
          {(params) => <SingleService serviceType={params.name} />}
        </Route>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
