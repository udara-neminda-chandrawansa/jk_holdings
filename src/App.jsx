
import { Route, Switch } from "wouter";
import Nav from './components/Nav';
import Landing from "./Landing";

function App() {
  return (
    <Switch>
      <div>
        <Nav></Nav>
        <Route path="/" component={Landing} />
      </div>
    </Switch>
  )
}

export default App
