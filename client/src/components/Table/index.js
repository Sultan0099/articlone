import React, { useState } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";

import TableHeader from "./Header";
import TableBody from "./Body";
import ActionBar from "./SelectedPostActions";

export default (props) => {
    const { data, tableHeaderData, onSelect, actions } = props;
    const [isRowSelected, setIsRowSelected] = useState([]);
    const [checkAll, setCheckAll] = useState(false);


    const selectRow = (e, postId) => {

        if (isRowSelected.indexOf(postId) === -1) {

            setIsRowSelected([...isRowSelected, postId]);
            onSelect(e, [...isRowSelected, postId])

        } else {
            const index = isRowSelected.indexOf(postId);
            isRowSelected.splice(index, 1);

            setIsRowSelected([...isRowSelected]);
            onSelect(e, isRowSelected);
        }

    }

    const selectAllRows = (e) => {
        const selectAllRows = data.posts.map(post => post._id);


        if (checkAll) {
            setIsRowSelected([])
            onSelect(e, [])
            setCheckAll(false);
        } else {
            setIsRowSelected([...selectAllRows])
            onSelect(e, [...selectAllRows])
            setCheckAll(true);
        }

    }


    return (
        <>
            <ActionBar totalPosts={data.totalPosts} selectedPosts={isRowSelected} setSelectedPosts={setIsRowSelected} postsPerPage={data.postPerPage} actions={actions} />
            <TableContainer>
                <Table size='small'>
                    <TableHeader tableHeaderData={tableHeaderData} onSelectAll={selectAllRows} checked={data.postPerPage == isRowSelected.length} />
                    <TableBody
                        data={data.posts}
                        tableHeaderData={tableHeaderData}
                        selectedRow={isRowSelected}
                        onSelect={selectRow}
                        checkAll={isRowSelected}
                    />
                </Table>
            </TableContainer>
        </>
    )
}