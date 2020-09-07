import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

import { Link, NavLink } from "react-router-dom";

import { BsPencilSquare } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { FiPlay, FiUsers } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSettings5Line } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";

import styles from "./styles";



export default ({ collection }) => {
    const classes = styles();
    const navItems1 = [
        {
            tooltip: "All Blogs",
            link: `/dashboard/${collection._id}/blog/posts`,
            Icon: () => <IoIosApps style={{ fontSize: 29 }} />
        },
        {
            tooltip: "Create Blogs",
            link: `/dashboard/${collection._id}/blog/create`,
            Icon: () => <BsPencilSquare style={{ fontSize: 25 }} />
        },
        {
            tooltip: "Users Details",
            link: `/dashboard/${collection._id}/user-details`,
            Icon: () => <FiUsers style={{ fontSize: 25 }} />
        },
        {
            tooltip: "Your Api",
            link: `/dashboard/${collection._id}/apis`,
            Icon: () => <FiPlay style={{ fontSize: 28 }} />
        }
    ]

    const navItems2 = [
        // {
        //     tooltip: "Docs",
        //     link: `/dashboard/${collection._id}/docs`,
        //     Icon: () => <AiOutlineFileText style={{ fontSize: 32 }} />
        // },
        {
            tooltip: "Settings",
            link: `/dashboard/${collection._id}/settings`,
            Icon: () => <RiSettings5Line style={{ fontSize: 34 }} />
        },
        {
            tooltip: "Profile",
            link: `/dashboard/${collection._id}/account`,
            Icon: () => <FaRegUserCircle style={{ fontSize: 28 }} />
        },
    ]
    return (
        <div className={classes.sideBar}>
            <div className={classes.navBox}>
                <Link to="/collections" style={{ textDecoration: "none" }}>
                    <Avatar size="large" variant="rounded" style={{
                        color: "#fff",
                        backgroundColor: "#075A5D"
                    }}>
                        {collection.collectionImg ? (
                            <img src={collection.collectionImg} alt='articlone collection avatar' style={{ width: "100%", height: "100%" }} />
                        ) : collection.title.substring(0, 2).toUpperCase()}
                    </Avatar>
                </Link>

                <div className={classes.links}>
                    {navItems1.map(({ tooltip, Icon, link }) => (
                        <Tooltip title={tooltip} arrow placement="right" key={tooltip} className={classes.tooltip}>
                            < NavLink to={link} activeClassName={classes.navActive} >
                                <Icon />
                            </NavLink>
                        </Tooltip>
                    ))}
                </div>
            </div>

            <div className={classes.navBox}>

                <div className={classes.links}>
                    <Tooltip title={"Docs"} arrow placement="right" className={classes.tooltip}>
                        <a href="/docs" target="_blank" >
                            <AiOutlineFileText style={{ fontSize: 32 }} />
                        </a>
                    </Tooltip>
                    {navItems2.map(({ tooltip, Icon, link }) => (
                        <Tooltip title={tooltip} arrow placement="right" key={tooltip} className={classes.tooltip}>
                            < NavLink to={link} activeClassName={classes.navActive} >
                                <Icon />
                            </NavLink>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div >
    )
}