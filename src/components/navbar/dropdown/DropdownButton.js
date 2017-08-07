import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

class DropdownButton extends Component {
    render() {
        return (
            <div className="dropdown-list">
                <Dropdown className="btn btn-primary mui-btn-none" color="none" size="large" label="Menu" alignMenu="right">
                    <DropdownItem className="dropdown-item text-center" link="#/">Home</DropdownItem>
                    <hr />
                    <DropdownItem className="dropdown-item text-center" link="#/products">Products</DropdownItem>
                    <hr />
                    <DropdownItem className="dropdown-item text-center" link="#/about">About</DropdownItem>
                    <hr />
                    <DropdownItem className="dropdown-item text-center" link="#/contact">Contact</DropdownItem>
                </Dropdown>
            </div>
        );
    }
}

export default DropdownButton;