import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import MyButton from '../utils/MyButton';
/**
* @author
* @class Pricing
**/

class Pricing extends Component {
    state = {
        price: [100, 150, 250],
        position: ['balcony', 'medium', 'star'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
            'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkTo: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delays: [500, 0, 500]
    }
    render() {
        const showBox = () => (
            this.state.price.map((box, i) => {
                return (
                    <Zoom delay={this.state.delays[i]} key={i}>
                        <div className="pricing_item">
                            <div className="pricing_inner_wrapper">
                                <div className="pricing_title">
                                    <span>${this.state.price[i]}</span>
                                    <span>{this.state.position[i]}</span>
                                </div>
                                <div className="pricing_description">
                                    {this.state.description}
                                </div>
                                <MyButton bck="#ffa800" value="Purchase" href={this.state.linkTo[i]} />
                            </div>
                        </div>
                    </Zoom>
                )
            })
        )
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {showBox()}
                    </div>
                </div>
            </div>
        )
    }
}


Pricing.propTypes = {}
export default Pricing