import React from 'react';
import classes from './VenueNFO.module.css';
import calendar from '../../resources/images/icons/calendar.png';
import location from '../../resources/images/icons/location.png';

/**
* @author
* @function VenueNFO
**/

const VenueNFO = (props) => {
    return (
        <div className={classes.VNWrapper}>
            <div className={classes.Item}>
                <div className={classes.Outer}>
                    <div className={classes.Inner}>
                        <div className={classes.IconSqaure}></div>
                        <div className={classes.Icon} style={{background:`url(${calendar})`}}></div>
                        <div className={classes.Title}>Event Date & Time</div>
                        <div className={classes.Desc}>7 August 2020 @ 10am</div>
                    </div>
                </div>
            </div>
            <div className={classes.Item}>
                <div className={classes.Outer}>
                    <div className={classes.Inner}>
                        <div className={classes.IconSqaure}></div>
                        <div className={classes.Icon} style={{background:`url(${location})`}}></div>
                        <div className={classes.Title}>Event Date & Time</div>
                        <div className={classes.Desc}>7 August 2020 @ 10am</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VenueNFO