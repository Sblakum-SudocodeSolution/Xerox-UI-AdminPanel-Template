import { useState, useEffect } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import axios from 'axios';

export default function ManageUser() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getApiData();
    }, []);

    const getApiData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => setUserData(res.data));
    };

    return (
        <>
            <MainCard title="Manage User">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>UserName</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userData.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.username}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>Online</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
}
