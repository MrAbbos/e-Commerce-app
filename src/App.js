import "./styles/style.css";
import "./styles/responsive.css";
import Cards from "./components/cards/cards";
import Carousel from "./components/my-carousel/carousel";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Carousel />
        <Cards />
        <Switch>
          <Route path="/products" exact component={Cards} />
        </Switch>
      </Router>
    </div>
  );
}
