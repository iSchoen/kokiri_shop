import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../footer/Footer';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    imageUrl: "https://img1.etsystatic.com/192/0/15044085/il_570xN.1300236743_jyuu.jpg",
                    price: "$25.00"
                },
                {
                    imageUrl: "https://img1.etsystatic.com/217/1/15044085/il_570xN.1300236073_gw49.jpg",
                    price: "$25.00"
                },
                {
                    imageUrl: "https://img1.etsystatic.com/191/0/15044085/il_570xN.1300235701_fbpz.jpg",
                    price: "$25.00"
                },
                {
                    imageUrl: "https://img0.etsystatic.com/203/0/15044085/il_fullxfull.1252991884_mqrm.jpg",
                    price: "$25.00"
                },
                {
                    imageUrl: "",
                    price: "0"
                },
            ]
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.products.map(function(product, index, arr) {
                    return (
                        <div className="col-sm-6">
                            <br />
                            <a href="">
                                <img className="img-responsive img-thumbnail" src={product.imageUrl} alt="" />
                                <h2>{product.price}</h2>
                            </a>
                        </div>
                    )
                })}
                <Footer />
            </div>
        )
    }
}

export default Products