import React from 'react';
import Button from '@material-ui/core/Button';

/**
* @author
* @function MyButton
**/

const MyButton = (props) => {
    return (
        <div style={{textAlign:'center'}}>
            <Button
                variant="contained"
                color="#ffffff"
                style={{ backgroundColor: `${props.bck}` }}
                startIcon={props.iconImg}
                href={props.href}>{props.value}</Button>
        </div>
    )

}

export default MyButton