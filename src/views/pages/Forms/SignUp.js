import * as React from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import axios from 'axios';

const theme = createTheme();

export default function Signup() {
    const [inputData, setInputData] = React.useState({
        userType: '',
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        compony: '',
        password: ''
    });

    let { userType, userName, firstName, lastName, email, compony, password } = inputData;

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('Admin_Signup', JSON.stringify(inputData));
        console.log('Admin_Signup : ', inputData);

        // axios.post('http://localhost:3002/User', inputData);

        setInputData({
            userType: '',
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            compony: '',
            password: ''
        });
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box component="form" validate onSubmit={handleSubmit} autoComplete="off" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="userType"
                                            value={userType}
                                            label="User Type"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        >
                                            <MenuItem value="Internal">Internal</MenuItem>
                                            <MenuItem value="External">External</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="userName"
                                        value={userName}
                                        onChange={(e) => handleChange(e)}
                                        required
                                        fullWidth
                                        label="User Name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => handleChange(e)}
                                        required
                                        fullWidth
                                        label="First Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={lastName}
                                        onChange={(e) => handleChange(e)}
                                        label="Last Name"
                                        name="lastName"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={email}
                                        onChange={(e) => handleChange(e)}
                                        label="Email Address"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={compony}
                                        onChange={(e) => handleChange(e)}
                                        label="Compony Name"
                                        name="compony"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={password}
                                        onChange={(e) => handleChange(e)}
                                        name="password"
                                        label="Password"
                                        type="password"
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                    <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                                        Sign Up
                                    </Button>
                                </AnimateButton>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
