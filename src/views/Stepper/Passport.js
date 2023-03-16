import React, { useState, useContext } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Grid, Box, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

export default function Passport({ nextStep, handleChange, value }) {
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} className="mt-3">
                <Grid container spacing={2}>
                    <Grid item xs={5} md={7}>
                        <Item sx={{ height: '92vh' }}>
                            <h5>ADD PASSPORT DETAILS</h5>
                            <Form className="mt-5" autoComplete="off" onSubmit={Continue}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className="d-flex flex-row">Passport Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Passport Number" name="passportNumber" required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label className="d-flex flex-row">Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" name="name" required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="d-flex flex-row">Date Of Birth</Form.Label>
                                        <Form.Control type="date" name="dob" required />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className="d-flex flex-row">Place Of Birth</Form.Label>
                                        <Form.Control type="text" placeholder="Place Of Birth" name="birthPlace" required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="d-flex flex-row">Place Of Issue</Form.Label>
                                        <Form.Control type="text" placeholder="Place Of Issue" name="issuePlace" required />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label className="d-flex flex-row">Nationality</Form.Label>
                                        <Form.Control type="text" placeholder="Nationality" name="nationality" required />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className="d-flex flex-row">Date Of Issue</Form.Label>
                                        <Form.Control type="date" name="doi" required />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label className="d-flex flex-row">Date Of Expire</Form.Label>
                                        <Form.Control type="date" name="doe" required />
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit" className="mt-2">
                                    Next
                                </Button>
                            </Form>
                        </Item>
                    </Grid>
                    <Grid item xs={7} md={5}>
                        <Item>
                            <div className="container">
                                <input type="file" className="form-control" onChange={onFileChange} accept=".pdf" required />

                                {file && <iframe title="pdfPreview" src={URL.createObjectURL(file)} width="100%" height="500" />}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
