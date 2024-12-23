import { Route } from "wouter";
import Nav from "./components/Nav";
import Landing from "./Landing";
import Footer from "./components/Footer";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
//import Projects from "./Projects";
//import CSR from "./CSR";
import SingleService from "./SingleService";
import CSRNew from "./CSRNew";
import ProjectsNew from "./ProjectsNew";
import Achievements from "./Achievements";
import ServicesCardsPage from "./ServicesCardsPage";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Route path="/" component={Landing} />
      <Route path="/contact" component={Contact} />
      <Route path="/aboutus" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services-grid/:name">
        {(params) => <ServicesCardsPage mainService={params.name} />}
      </Route>
      <Route path="/achievements" component={Achievements} />
      <Route path="/projects" component={ProjectsNew} />
      <Route path="/csr" component={CSRNew} />
      <Route path="/services/:name">
        {(params) => <SingleService serviceType={params.name} />}
      </Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
