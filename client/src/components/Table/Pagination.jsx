import React, { useState } from "react";

import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import styles from "./styles";


export default ({ pagination, totalPages, currentPage }) => {
    const classes = styles();
    const [page, setPage] = useState(currentPage);
    const { fetchMorePosts } = pagination;

    const handleClick = (cond) => {
        if (cond === "next") {
            let nextPage = currentPage + 1
            fetchMorePosts(nextPage)
            setPage(nextPage)
            return
        }
        if (cond === "previous") {
            let previousPage = currentPage - 1
            fetchMorePosts(previousPage)
            setPage(previousPage)
            return
        }
    }

    return (
        <div className={classes.paginationBar}>
            <Button color="primary" onClick={() => handleClick("previous")} disabled={currentPage === 1}>
                <MdKeyboardArrowLeft style={{ fontSize: 24 }} />
                Previous
            </Button>

            <Typography variant="subtitle2" className={classes.paginationCount}> {page} </Typography>
            <Button color="primary" onClick={() => handleClick("next")} disabled={totalPages <= currentPage}>
                Next
            <MdKeyboardArrowRight style={{ fontSize: 24 }} />
            </Button>
        </div >
    )
}