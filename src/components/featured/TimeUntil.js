import React, { useState, useEffect } from 'react';
import classes from './TimeUtil.module.css';
import Slide from 'react-reveal/Slide';


/**
* @author
* @function TimeUntil
**/

const TimeUntil = (props) => {

    const [deadline, setDeadline] = useState('Dec 12, 2020');
    const [day, setDay] = useState('0');
    const [hour, setHour] = useState('0');
    const [minute, setMinute] = useState('0');
    const [seconds, setSeconds] = useState('0');

    useEffect(() => {
        setInterval(()=>handleTime(deadline),1000);
    }, []);

    const handleTime = (deadline) => {
        const currentTime = Date.parse(new Date());
        const time = Date.parse(deadline) - currentTime;
        if(time<0){
            console.log('time is over');
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minute = Math.floor((time/1000/60)%60);
            const hour = Math.floor((time/1000/60/60)%24);
            const day = Math.floor((time/1000/60/60/24));

            setDay(day);
            setHour(hour);
            setMinute(minute);
            setSeconds(seconds);
        }
    }

    return (
        <Slide left delay={1000}>
            <div className={classes.CountDownWrapper}>
                <div className={classes.CountDownTop}>Event Starts In</div>
                <div className={classes.CountDownBottom}>
                    <div className={classes.CountDownItem}>
                        <div className={classes.CountDownTime}>{day}</div>
                        <div className={classes.CountDownTag}>days</div>
                    </div>
                    <div className={classes.CountDownItem}>
                        <div className={classes.CountDownTime}>{hour}</div>
                        <div className={classes.CountDownTag}>hrs</div>
                    </div>
                    <div className={classes.CountDownItem}>
                        <div className={classes.CountDownTime}>{minute}</div>
                        <div className={classes.CountDownTag}>mins</div>
                    </div>
                    <div className={classes.CountDownItem}>
                        <div className={classes.CountDownTime}>{seconds}</div>
                        <div className={classes.CountDownTag}>secs</div>
                    </div>
                </div>
            </div>
        </Slide>
    )

}

export default TimeUntil