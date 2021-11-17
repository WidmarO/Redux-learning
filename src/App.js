import Header from './components/Header';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import Products from './components/Products';
import Home from './components/Home';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Products} />
          <Route exact path="/nuevo_producto" component={NewProduct} />
          <Route exact path="/productos/editar/:id" component={EditProduct} />
        </Switch>

      </Provider>
    </Router>
  );
}

export default App;
