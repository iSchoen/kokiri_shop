import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../footer/Footer';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row about-row">
                    <div className="col-lg-5">
                        <img className="img-responsive about-image" src="http://i.imgur.com/YRFUHri.jpg?1" alt="" />
                        <p className="text-center text-primary about-image-caption">"Lucas, owner of Kokiri Shop, and his wife, Teresa"</p>
                    </div>
                    {/* <div className="col-lg-1" /> */}
                    <div className="col-lg-7 about-paragraph">
                        <p>Lucas Schoen is a Salt Lake City native who has always been passionate about all things “geeky!” 
                            His personal favorites are Japanese RPGs and MOBAs. Lucas has also been a long time apprentice 
                            for his father creating custom jewelry. One day, Lucas had the brilliant idea to combine his love 
                            of gaming and his knowledge of jewelry to create wearable pieces from his favorite games!
                            </p>

                        <p>The thing that makes the Kokiri Shop different from other gaming accessory vendors is the 
                            craftsmanship that goes into each step of the design and manufacturing process. The Kokiri Shop 
                            first decides on a specific character to create, then sends design requests to a professional 
                            illustrator to create original concept art! We then use these digital images to create quality 
                            charms cast in silver. Each piece is handcrafted, polished, and colored by Lucas using 
                            professional jeweler techniques.
                            </p>

                        <p>When you purchase a piece from the Kokiri Shop, you can be sure that it is one of a kind! Each 
                            charm is created thoughtfully, and with the personality of the character in mind. You can contact 
                            the Kokiri Shop for more information, or to send us a request!
                            </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;