import React from 'react';

import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';
import classes from './Featured.module.css';

/**
* @author
* @function Featured
**/

const Featured = (props) => {
    return (
        <div position='relative'>
            <Carrousel />
            <div className={classes.ArtistName}>
                <div className={classes.Wrapper}>Ariana Grande</div>
            </div>
            <TimeUntil />
        </div>
    )

}

export default Featured