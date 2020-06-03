import React, { useEffect, useState } from 'react';
import { Toolbar, AppBar, IconButton } from '@material-ui/core';
import MenuIcons from '@material-ui/icons/Menu';

import classes from './Header.module.css';
import SideDrawer from './SideDrawer';

/**
* @author
* @function Header
**/

const Header = (props) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }
    }

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: headerShow ? "#2f2f2f" : "transparent",
                boxShadow: "none",
                padding: "10px 0"
            }}>
            <Toolbar>
                <div className={classes.HeaderLogo}>
                    <div className={classes.HeaderLogoVenue}>The Venue</div>
                    <div className={classes.HeaderLogoTitle}>Musical Events</div>
                </div>
                <IconButton color="inherit"
                    arial-label="Menu"
                    onClick={() => toggleDrawer(true)}>
                    <MenuIcons />
                </IconButton>
                <SideDrawer
                    open={drawerOpen}
                    onClose={(value) => toggleDrawer(value)}
                />
            </Toolbar>
        </AppBar>
    )

}

export default Header