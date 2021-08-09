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

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Carousel />
                <Cards />
              </>
            )}
          />
          <Route exact path="/product/:productId" component={ProductDetailed} />
        </Switch>
      </Router>
    </div>
  );
}
