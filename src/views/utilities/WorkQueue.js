import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { Grid, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import Model from './Model';

export default function WorkQueue() {
    const [userData, setUserData] = useState([]);
    const [modalShow, setModalShow] = useState({
        show: false,
        selectedItemId: 0
    });

    useEffect(() => {
        getApiData();
    }, []);

    const getApiData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => setUserData(res.data));
    };
    return (
        <>
            <MainCard title="Work Queue">
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
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.username}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() =>
                                                        setModalShow({
                                                            show: true,
                                                            selectedItemId: item.id
                                                        })
                                                    }
                                                >
                                                    Action
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <Model
                                        show={modalShow.show}
                                        selectedItemId={modalShow.selectedItemId}
                                        onHide={() =>
                                            setModalShow({
                                                show: false,
                                                selectedItemId: 0
                                            })
                                        }
                                    />
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
}
