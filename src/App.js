import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portafolio from './pages/Portafolio';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Info from './pages/Info';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info">
          <Info/>
        </Route>

        <Route path="/portafolio">
          <Portafolio/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <Error404/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
