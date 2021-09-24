import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Switch>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <ProductList />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
