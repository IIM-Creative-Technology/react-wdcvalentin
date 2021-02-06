import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { QuizzPage } from "./pages/QuizzPage";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quizz" component={QuizzPage} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
