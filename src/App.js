import NavBar from './containers/NavBar/NavBar'
import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductPage from './containers/ItemListContainer/ItemListContainer';
import DetailPage from './containers/ItemDetailContainer/ItemDetailContainer'
import CheckoutCart from './containers/CheckoutCart/CheckoutCart'
import Footer from './containers/Footer/Footer';

function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <div className='slider'></div>
      <Switch>
        <Route exact path="/" component={ProductPage}/>
        <Route path="/category/:categoryId" component={ProductPage}/>
        <Route path="/item/:id" component={DetailPage}/>
        <Route path="/cart" component={CheckoutCart}/>
      </Switch>
      <Footer />
    </BrowserRouter>
    
  )
}
export default App

