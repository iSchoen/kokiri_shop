import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../footer/Footer';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="home-page">
                    <div className="row">
                        <div className="col-sm-1" />
                        <img className="col-sm-10 img-responsive center-block home-image" src="http://i.imgur.com/P3o63wc.png" alt="" />
                        <div className="col-sm-1" />
                    </div>

                    <div className="row">
                        <h1 className="title-font text-center">
                            <i className="blue">K</i>
                            <i className="red">o</i>
                            <i className="yellow">k</i>
                            <i className="blue">i</i>
                            <i className="green">r</i>
                            <i className="red">i</i>
                            <i> </i>
                            <i className="yellow">S</i>
                            <i className="blue">h</i>
                            <i className="green">o</i>
                            <i className="red">p</i>
                        </h1>
                    </div>
                    <br />

                    <div className="row">
                        <h2 className="subtitle-font text-center">Your <a href="https://www.youtube.com/watch?v=VLAekpsclQY&t=83s" className="title-link">link</a> to the best gaming accessories</h2>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;