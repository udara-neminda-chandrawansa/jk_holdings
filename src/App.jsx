
import { Route, Switch } from "wouter";
import Nav from './components/Nav';
import Landing from "./Landing";
import Footer from "./components/Footer";

function App() {
  return (
    <Switch>
      <div>
        <Nav></Nav>
        <Route path="/" component={Landing} />
        <Footer></Footer>
      </div>
    </Switch>
  )
}

export default App
