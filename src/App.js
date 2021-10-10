import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import OrderReview from './components/OederReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>
            <PrivateRoute path='/order'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
