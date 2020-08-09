import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

import { Link } from "react-router-dom";

import { BsPencilSquare } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

import styles from "./styles";



export default ({ collection }) => {
    const classes = styles();
    const navItems = [
        {
            tooltip: "Create Blogs",
            link: `/dashboard/${collection._id}/blog/create`,
            Icon: () => <BsPencilSquare style={{ fontSize: 25 }} />
        },
        {
            tooltip: "All Blogs",
            link: `/dashboard/${collection._id}/blog/all`,
            Icon: () => <IoIosListBox style={{ fontSize: 25 }} />
        },
    ]
    return (
        <div className={classes.sideBar}>
            <div className={classes.navBox}>
                <Avatar size="large" variant="rounded" style={{
                    color: "#fff",
                    backgroundColor: "#075A5D"
                }}> {collection.title.substring(0, 2).toUpperCase()}</Avatar>
                <div className={classes.links}>
                    {navItems.map(({ tooltip, Icon, link }) => (
                        <Tooltip title={tooltip} arrow placement="right" key={tooltip} className={classes.tooltip}>
                            < Link to={link} >
                                <Icon />
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            </div>

            <div className={classes.navBox}></div>


        </div >
    )
}