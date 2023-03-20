import React, { Component } from 'react';


class C_Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }

    render() {
        return(
            <div className="container">
                <p className="title" href="/">
                    <h3><em>Welcome To the Future of Shopping <i class="material-icons">&#xe854;</i></em></h3>
                </p>
            <br></br>
            <div className="datas">
                    <a href="/c_products"><em>Groceries</em></a>
                    <a href="/c_products"><em>Electronics</em></a>
                    <a href="/mensfashion"><em>Mens Fashion</em></a>
                    <a href="/womensfashion"><em>Girls Fashion</em></a>
                    <a href="/c_products"><em>Others</em></a>
            </div>
            </div>
        )
    }
}

export default C_Products
