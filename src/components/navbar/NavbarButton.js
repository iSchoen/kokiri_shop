import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavbarButton extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="text-center navbar-button">
                <Link to={this.props.urlPath}><strong>{this.props.name}</strong></Link>
            </div>
        )
    }
}

export default NavbarButton;