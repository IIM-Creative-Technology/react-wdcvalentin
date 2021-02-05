import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { QuizzPage } from "./pages/Quizz";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quizz" component={QuizzPage} />
        {/* <Route exact path="/quizz-history" component={Quizz} />
        <Route exact path="/quizz-insolite" component={Quizz} />
        <Route exact path="/quizz-manga" component={Quizz} /> */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
