import React, { Component } from 'react';

class ContactUs extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }

    render() {
        return(
            <div className="container">
            <li className="collection-item avatar">
                <p className="title"><b>Contact Us.!</b></p>
                <p className="secondary-content">
                <br></br>
                        <b>Authors: </b>
                        <ol>
                            <li><b>Aakash Pandey</b><a href="https://www.github.com/ygniko">  GitHub</a></li>
                            <li><b>Kapur Mahatara</b><a href="https://www.github.com/geosphetic">  GitHub</a></li>
                            <li><b>Lokesh Pandit</b><a href="https://www.github.com/203lol">  GitHub</a></li>
                            <li><b>Mandipa Thapa</b><a href="https://www.github.com/mandipa5">  GitHub</a></li>
                        </ol>
                </p>
                <p>
                    <i>Email Us: info@antifakesystem.com</i>
                </p>
            </li>
    </div>
)
}
}

export default ContactUs
