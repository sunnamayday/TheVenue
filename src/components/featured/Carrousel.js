import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import classes from './Carrousel.module.css';


/**
* @author
* @function Carrousel
**/

const Carrousel = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true
    }
    return (
        <div className={classes.CarrouselWrapper}
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}>
            <Slider {...settings}>
                <div >
                    <div className={classes.CarrouselImg}
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}></div>
                </div>

                <div >
                    <div className={classes.CarrouselImg}
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`
                        }}></div>
                </div>
                <div >
                    <div className={classes.CarrouselImg}
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`
                        }}></div>
                </div>
            </Slider>
        </div>
    )

}

export default Carrousel