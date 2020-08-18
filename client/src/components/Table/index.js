import React, { useState, useEffect } from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import Table from "@material-ui/core/Table";

import TableHeader from "./Header";
import TableBody from "./Body";
import ActionBar from "./SelectedPostActions";
import Pagination from "./Pagination";

export default (props) => {
    const { data, tableHeaderData, onSelect, actions, pagination, filter } = props;
    const [isRowSelected, setIsRowSelected] = useState([]);
    const [checked, setChecked] = useState(false);
    const [checkAll, setCheckAll] = useState(false);



    useEffect(() => {
        if (checked && data.posts.length === isRowSelected.length) {
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    }, [checked, isRowSelected])

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

        if (checked && checkAll) {
            setIsRowSelected([])
            onSelect(e, [])
            setChecked(false);
        }
        else {
            const selectAllRows = data.posts.map(post => post._id);
            setIsRowSelected([...selectAllRows])
            onSelect(e, [...selectAllRows])

            setChecked(true);
        }

    }

    return (
        <div >
            <ActionBar totalPosts={data.totalPosts} selectedPosts={isRowSelected} setSelectedPosts={setIsRowSelected} postsPerPage={data.postPerPage} actions={actions} />
            <TableContainer >
                <Table size='small'>
                    <TableHeader tableHeaderData={tableHeaderData} onSelectAll={selectAllRows} checked={checkAll} />
                    <TableBody
                        posts={data[filter]}
                        data={data}
                        tableHeaderData={tableHeaderData}
                        selectedRow={isRowSelected}
                        onSelect={selectRow}
                        checkAll={isRowSelected}
                    />
                </Table>
            </TableContainer>
            <Pagination pagination={pagination} totalPages={data.totalPages} currentPage={data.currentPage} />
        </div>
    )
}