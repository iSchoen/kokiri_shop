import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FooterContent from './FooterContent'

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid footer">
                <hr />
                <div className="row">
                    <FooterContent>
                        <img className="img-responsive" src="http://i.imgur.com/j04q3Mu.png" alt="" />
                    </FooterContent>
                    <FooterContent>
                        <h3>See More</h3>
                        <hr className="footer-separator" />
                        <ul>
                            <li><a href="http://eadgear.deviantart.com">Illustrator</a></li>
                             {/* <br />  */}
                            <li><a href="https://www.facebook.com/paulschoenjewelers/">Paul Schoen Jewelers</a></li>
                        </ul>
                    </FooterContent>
                    <FooterContent>
                        <img className="img-responsive" src="http://i.imgur.com/2IY0kuP.png" alt="" />
                    </FooterContent>
                    <FooterContent>
                        <h3>Connect</h3>
                        <hr className="footer-separator" />
                        <ul>
                            <li><a href="https://www.facebook.com/kokirishopslc/">Facebook</a></li>
                             {/* <br />  */}
                            <li><a href="https://www.etsy.com/shop/KokiriShopSlc">Etsy</a></li>
                        </ul>
                    </FooterContent>
                    <FooterContent>
                        <img className="img-responsive" src="http://i.imgur.com/PidGJwk.png" alt="" />
                    </FooterContent>
                </div>
            </div>
        )
    }
}

export default Footer;