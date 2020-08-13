import React from 'react';

import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { BsPencil } from 'react-icons/bs';
import { IoIosPaper } from "react-icons/io";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles";
import DialogButton from "./DialogButton";

export default ({ data, tableHeaderData, onSelect, selectedRow }) => {
    const classes = styles();
    const collectionId = useSelector(state => state.collections.active._id);

    return (
        <TableBody>

            {data.map(row => (
                <TableRow key={row._id}>
                    <TableCell>
                        <Checkbox
                            checked={selectedRow.indexOf(row._id) !== -1}
                            onChange={(e) => onSelect(e, row._id)}
                            inputProps={{ 'aria-labelledby': row._id }}
                        />
                    </TableCell>
                    <TableCell>
                        <Button component={Link} to={`/dashboard/${collectionId}/blog/edit/${row._id}`} className={classes.editButton}>
                            <BsPencil />
                        </Button>
                    </TableCell>
                    {tableHeaderData.map(cell => (
                        <React.Fragment key={cell}>
                            <TableCell >
                                {row[cell].length > 40 ? <DialogButton title={cell} content={row[cell]} icon={IoIosPaper} /> : row[cell]}
                            </TableCell>
                        </React.Fragment>
                    ))}
                </TableRow>

            ))}
        </TableBody>
    )
}