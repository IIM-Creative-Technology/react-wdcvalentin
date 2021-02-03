import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
