import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

import { Link, NavLink } from "react-router-dom";

import { BsPencilSquare, BsCollection } from "react-icons/bs";
import { IoIosListBox, IoIosApps } from "react-icons/io";

import styles from "./styles";



export default ({ collection }) => {
    const classes = styles();
    const navItems = [
        {
            tooltip: "All Blogs",
            link: `/dashboard/${collection._id}/blog/all`,
            Icon: () => <IoIosApps style={{ fontSize: 29 }} />
        },
        {
            tooltip: "Create Blogs",
            link: `/dashboard/${collection._id}/blog/create`,
            Icon: () => <BsPencilSquare style={{ fontSize: 25 }} />
        },

    ]
    return (
        <div className={classes.sideBar}>
            <div className={classes.navBox}>
                <Link to="/collections">
                    <Avatar size="large" variant="rounded" style={{
                        color: "#fff",
                        backgroundColor: "#075A5D"
                    }}> {collection.title.substring(0, 2).toUpperCase()}</Avatar>
                </Link>

                <div className={classes.links}>
                    {navItems.map(({ tooltip, Icon, link }) => (
                        <Tooltip title={tooltip} arrow placement="right" key={tooltip} className={classes.tooltip}>
                            < NavLink to={link} activeClassName={classes.navActive} >
                                <Icon />
                            </NavLink>
                        </Tooltip>
                    ))}
                </div>
            </div>

            <div className={classes.navBox}></div>


        </div >
    )
}