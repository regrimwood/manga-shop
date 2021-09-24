import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductListing from "./Pages/Product.js";
import ProductListings from "./Pages/ProductList.js";

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Switch>
            <Route path="/product/:id">
              <ProductListing />
            </Route>
            <Route path="/">
              <ProductListings />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
