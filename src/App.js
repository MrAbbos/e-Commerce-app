import "./styles/style.css";
import "./styles/responsive.css";
import Cards from "./components/cards/cards";
import Carousel from "./components/my-carousel/carousel";
import Header from "./components/header/Header";
import ProductDetailed from "./components/productDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Carousel />
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/product/:productid" exact component={ProductDetailed} />
        </Switch>
      </Router>
    </div>
  );
}
