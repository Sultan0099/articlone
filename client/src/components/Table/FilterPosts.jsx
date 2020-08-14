import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { RiFilter2Line } from "react-icons/ri"

import styles from "./styles";


export default ({ filterAction }) => {

    const classes = styles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const filterPosts = (changeFilter) => {
        filterAction(changeFilter);
        handleClose();
    };
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.filterButton}>
                <RiFilter2Line style={{ fontSize: 14 }} />
                filter
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => filterPosts('posts')}>All Posts</MenuItem>
                <MenuItem onClick={() => filterPosts('published')}>Published </MenuItem>
                <MenuItem onClick={() => filterPosts('unPublished')}>Un Published</MenuItem>
            </Menu>
        </div>
    );
}