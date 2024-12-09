
import { Route, Switch } from "wouter";
import Nav from './components/Nav';
import Landing from "./Landing";
import Footer from "./components/Footer";
import Contact from "./Contact";

function App() {
  return (
    <Switch>
      <div>
        <Nav></Nav>
        <Route path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Footer></Footer>
      </div>
    </Switch>
  )
}

export default App
