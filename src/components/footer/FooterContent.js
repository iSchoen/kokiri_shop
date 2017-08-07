import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FooterContent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="col-md-5ths text-center footer-content">
                {this.props.children}
            </div>
        )
    }
}

export default FooterContent