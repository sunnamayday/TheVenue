import React from 'react'

/**
* @author
* @function Location
**/

const Location = (props) => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.469899946572!2d-123.37402838447159!3d48.447512979249375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f739d205abe3d%3A0x418b21bb4d278d8a!2z5qKF6I-y5bCU6LSt54mp5Lit5b-D!5e0!3m2!1szh-CN!2sca!4v1591168218998!5m2!1szh-CN!2sca"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen="true"
                >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )

}

export default Location