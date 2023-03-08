import React, { Component } from 'react';
import NavBar from './components/custom/Navbar';
import Home from './components/custom/Home';
import Reject from './components/custom/Reject';
import C_Products from './components/custom/c_products';
import remCount from './components/custom/remCount';
import Rejected from './components/custom/Rejected';
import ProductData from './components/custom/ProductData';
import Choose from './components/custom/Choose';
import AboutUs from './components/custom/AboutUs';
import ContactUs from './components/custom/ContactUs';
import { BrowserRouter, Route } from 'react-router-dom';
import AcceptProduct from './components/custom/AcceptProduct';
import AddProduct from './components/custom/AddProduct';
import AddProduct11 from './components/custom/AddProduct11';
import Login from './components/custom/Login';
import C_Register from './components/custom/register';
import BP_Register from './components/custom/bp_register';
import bp_login from './components/custom/bp_login';
import PM_Register from './components/custom/pm_register';
import pm_login from './components/custom/pm_login';
import PD_Register from './components/custom/pd_register';
import pd_login from './components/custom/pd_login';

class App extends Component {

    getVal = () => {
        console.log('Test!')
    }

    render(){
        return (
        <BrowserRouter>
            <div className="App">
                <NavBar getVal={this.getVal}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/addproduct" component={AddProduct} />
                <Route exact path="/addproduct11" component={AddProduct11} />
                <Route exact path="/productdec" component={ProductData} />
                <Route exact path="/acceptproduct/:id" component={AcceptProduct} />
                <Route exact path="/reject/:id" component={Reject} />
                <Route exact path="/choose" component={Choose} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/c_products" component={C_Products} />
                <Route exact path="/ContactUs" component={ContactUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/remCount" component={remCount}/>
                <Route exact path="/rejected" component={Rejected}/>
                <Route exact path="/register" component={C_Register}/>
                <Route exact path="/bp_register" component={BP_Register}/>
                <Route exact path="/bp_login" component={bp_login}/>
                <Route exact path="/pm_register" component={PM_Register}/>
                <Route exact path="/pm_login" component={pm_login}/>
                <Route exact path="/pd_register" component={PD_Register}/>
                <Route exact path="/pd_login" component={pd_login}/>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
