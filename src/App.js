import React from 'react';
import {Menu} from "./header/Menu";
import {Logo} from "./header/Logo";
import Home from "./home/Home";
import Stock from "./stock/Stock";
import Contact from "./contact/Contact";
import About from "./about/About";
import Cart from "./cart/Cart";
import Authorization from "./authorization/Autorisation";
import {Footer} from "./footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {CardProvider} from "./cardContext/CardContext";


function App() {

  return (
    <div className="App">
        <header className="App-header container">
            <Logo/>
            <Menu/>
        </header>
        <CardProvider>
                <BrowserRouter>
                <div className="wrapper container">
                    <Route path='/login' component={Authorization}/>
                    <Route path='/register' component={Authorization}/>
                    <Route path='/stock'  component={Stock}/>
                    <Route path='/contact'  component={Contact}/>
                    <Route path='/about'  component={About}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/cart' component={Cart} />
                </div>
            </BrowserRouter>
        </CardProvider>
        <Footer/>
    </div>
  );
}

export default App;
