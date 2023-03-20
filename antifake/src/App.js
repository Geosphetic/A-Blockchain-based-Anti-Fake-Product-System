import React, { Component } from 'react';
import Admin from './components/custom/admin';
import NavBar from './components/custom/Navbar';
import Home from './components/custom/Home';
import C_Products from './components/custom/c_products';
import BlockchainData from './components/custom/BlockchainData';
import ProductData from './components/custom/ProductData';
import Choose from './components/custom/Choose';
import BPtoPM from './components/custom/BPtoPM';
import decisionFromBP from './components/custom/decisionfromBP';
import PD_Products from './components/custom/PD_Products';
import AboutUs from './components/custom/AboutUs';
import ContactUs from './components/custom/ContactUs';
import { BrowserRouter, Route } from 'react-router-dom';
import AcceptProduct from './components/custom/AcceptProduct';
import AddProduct from './components/custom/AddProduct';
import RejectProduct from './components/custom/reject';
import PM2BP from './components/custom/PM_BP';
import Login from './components/custom/Login';
import C_Register from './components/custom/register';
import BP_Register from './components/custom/bp_register';
import bp_login from './components/custom/bp_login';
import PM_Register from './components/custom/pm_register';
import pm_login from './components/custom/pm_login';
import PMReset from './components/custom/pmreset';
import PD_Register from './components/custom/pd_register';
import pd_login from './components/custom/pd_login';
import MenProducts from './Products/mensfashion';
import WomenProducts from './Products/womensfashion';
import ProductStatus from './components/custom/showReason';

class App extends Component {

    getVal = () => {
        console.log('Test!')
    }

    render(){
        return (
        <BrowserRouter>
            <div className="App">
                <NavBar getVal={this.getVal}/>
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/" component={Home} />
                <Route exact path="/addproduct/:bp" component={AddProduct} />
                <Route exact path="/pmtobp/:pm" component={PM2BP} />
                <Route exact path="/productdec/:pm" component={ProductData} />
                <Route exact path="/acceptproduct/:id" component={AcceptProduct} />
                <Route exact path="/reject/:id" component={RejectProduct} />
                <Route exact path="/choose/:pm" component={Choose} />
                <Route exact path="/fromBP/:pm_username" component={BPtoPM} />
                <Route exact path="/decisionfromBP/:pm_username" component={decisionFromBP} />
                <Route exact path="/pd_products/:pm_username" component={PD_Products} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/c_products" component={C_Products} />
                <Route exact path="/ContactUs" component={ContactUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/blockchaindata" component={BlockchainData}/>
                <Route exact path="/register" component={C_Register}/>
                <Route exact path="/bp_register" component={BP_Register}/>
                <Route exact path="/bp_login" component={bp_login}/>
                <Route exact path="/pm_register" component={PM_Register}/>
                <Route exact path="/pm_login" component={pm_login}/>
                <Route exact path="/pmforget" component={PMReset}/>
                <Route exact path="/pd_register" component={PD_Register}/>
                <Route exact path="/pd_login" component={pd_login}/>
                <Route exact path="/mensfashion" component={MenProducts}/>
                <Route exact path="/womensfashion" component={WomenProducts}/>
                <Route exact path="/showreason/:id" component={ProductStatus}/>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
