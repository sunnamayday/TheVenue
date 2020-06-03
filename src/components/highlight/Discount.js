import React, { Component } from 'react';
import Fade from 'react-reveal';
import Slide from 'react-reveal';
import MyButton from '../utils/MyButton';

/**
* @author
* @class Discount
**/

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porsentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({ discountStart: this.state.discountStart + 1 });
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porsentage()
        }, 50);

    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.porsentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>off</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <MyButton bck="#ffa800" value="Purchase" href="http://www.google.com" />

                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}


export default Discount