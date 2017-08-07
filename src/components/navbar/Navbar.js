import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavbarButton from './NavbarButton';
import DropdownButton from './dropdown/DropdownButton';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row text-uppercase navbar-big">
                    <div className="col-xs-3 ">
                        <NavbarButton urlPath="/" name="Home" />
                    </div>
                    <div className="col-xs-3 ">
                        <NavbarButton urlPath="/products" name="Products" />
                    </div>
                    <div className="col-xs-3">
                        <NavbarButton urlPath="/about" name="About" />
                    </div>
                    <div className="col-xs-3">
                        <NavbarButton urlPath="/contact" name="Contact" />
                    </div>
                </div>

                 <div className="row text-uppercase navbar-small text-right">
                    <DropdownButton />
                </div>

                <hr className="separator" />
            </div>
        )
    };
}

export default Navbar;