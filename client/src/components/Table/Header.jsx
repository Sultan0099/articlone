import React from 'react';

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell";

import Checkbox from "@material-ui/core/CheckBox"

export default ({ tableHeaderData, onSelectAll, checked }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox
                        checked={checked}
                        onChange={onSelectAll}
                        inputProps={{ 'aria-label': 'select all blogs' }}
                    />
                </TableCell>
                <TableCell>
                    Edit
                </TableCell>
                {tableHeaderData.map(cell => (
                    <TableCell key={cell}>{cell}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}