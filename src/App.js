import NavBar from './containers/NavBar/NavBar'
import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductPage from './containers/ItemListContainer/ItemListContainer';
import DetailPage from './containers/ItemDetailContainer/ItemDetailContainer'
import CartView from './containers/CartView/CartView'
import Footer from './containers/Footer/Footer';
import CartContextProvider from './context/CartContext';
import Checkout from './containers/Checkout/Checkout';
import DeliverContainer from './containers/DeliverContainer/DeliverContainer';
import PageNotFound from './containers/PageNotFound/PageNotFound';

function App(){
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={ProductPage}/>
          <Route path="/category/:categoryId" component={ProductPage}/>
          <Route path="/item/:id" component={DetailPage}/>
          <Route path="/cart" component={CartView}/>
          <Route path="/checkout" component={Checkout} />
          <Route component={PageNotFound} />
        </Switch>
        <DeliverContainer />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App

