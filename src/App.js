import './App.css';
//toast
import { ToastProvider } from 'react-toast-notifications';
//context
import ContextProductsProvider from './context/ContextProductsProvider';
import CardContextProvider from './context/CardContextProvider';
//components
import ProductDetails from './components/ProductDetails';
import Store from './components/Store';
import Navbar from './components/Navbar';
import ShopCard from './shared/ShopCard';
//react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <ContextProductsProvider>
      <CardContextProvider>
        <ToastProvider>
          <Navbar />
          <Switch>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/product" component={Store} />
            <Route path="/shopcard" component={ShopCard} />
            <Redirect to="/product" />
          </Switch>
        </ToastProvider>
      </CardContextProvider>
    </ContextProductsProvider>
  );
}

export default App;
