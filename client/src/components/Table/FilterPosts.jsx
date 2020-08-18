import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link, useParams } from "react-router-dom";

import { RiFilter2Line } from "react-icons/ri"

import styles from "./styles";


export default ({ filterAction }) => {

    const classes = styles();
    const { collectionId } = useParams();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
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
                <MenuItem component={Link} to={`/dashboard/${collectionId}/blog/posts`} onClick={() => setAnchorEl(null)}>All Posts</MenuItem>
                <MenuItem component={Link} to={`/dashboard/${collectionId}/blog/published`} onClick={() => setAnchorEl(null)}>Published </MenuItem>
                <MenuItem component={Link} to={`/dashboard/${collectionId}/blog/unPublished`} onClick={() => setAnchorEl(null)}>Un Published</MenuItem>
            </Menu>
        </div>
    );
}