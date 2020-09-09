import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useParams } from "react-router-dom";
import axios from "axios";

import { getVisitedUser } from "../../redux/_actions/collectionAction";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

export default () => {
  const classes = useStyles();
  const { collectionId } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const getUser = async () => {
      const users = await getVisitedUser(collectionId);
      setUsers([...users]);
      setLoading(false);
    }

    getUser()

  }, [])
  if (loading) return <p>Loading...</p>
  return (
    <div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Registered Users</TableCell>
              <TableCell align="right">User _id</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Created At</TableCell>
            </TableRow>
          </TableHead>
      {users.map(d => (
          <TableBody key={d._id}>
            {rows.map((row) => (
              <TableRow key={d._id}>
                <TableCell component="th" scope="row">
                  {d.name}
                </TableCell>
                <TableCell align="right" >{d._id}</TableCell>
                <TableCell align="right">{d.email}</TableCell>
                <TableCell align="right">{d.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      ))}
        </Table>
      </TableContainer>    
    </div>
  )
}