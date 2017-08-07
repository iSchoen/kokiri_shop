import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10">
                        <img className="img-responsive contact-image" src="http://i.imgur.com/I5w6XLa.jpg" alt="" />
                    </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-2" />
                    <p className=" col-sm-8 text-center text-primary contact-paragraph">
                        At The Kokiri Shop, we are happy to discuss anything you have in mind.  To contact us, use any of the
                            following methods:
                    </p>
                    <div className="col-sm-2" />
                </div>
                <div className="row">
                    <hr />
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <ul className="col-sm-6 text-center contact-list">
                        <li><i className="glyphicon glyphicon-earphone" /> Phone: (555)555-5555</li>
                        <li><i className="glyphicon glyphicon-envelope" /> <a href="mailto:KokiriShopSLC@gmail.com?Subject=Contact%20Request">Email - KokiriShopSLC@gmail.com</a></li>
                        <li><i className="glyphicon glyphicon-book" /> <a href="https://www.facebook.com/kokirishopslc/">Facebook - KokiriShopSLC</a></li>
                        <li><i className="glyphicon glyphicon-tags" /> <a href="https://www.etsy.com/shop/KokiriShopSlc">Purchase on Etsy</a></li>
                    </ul>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }
}

export default Contact;