import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/singup/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import AboutPage from './landing_page/about/Aboutpage';
import ProductPage from './landing_page/products/ProductsPage';
import SupportPage from "./landing_page/support/Supportpage"
import PricingPage from "./landing_page/price/Pricingpage"
import NotFound from './landing_page/Notfound';
import Login from './landing_page/singup/LoginPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/about' element={<AboutPage/>}></Route>
     <Route path='/product' element={<ProductPage/>}></Route>
     <Route path='/support' element={<SupportPage/>}></Route>
     <Route path='/pricing' element={<PricingPage/>}></Route>
     <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
);

export default App;