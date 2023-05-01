import * as React from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select, FormControl, MenuItem, InputLabel, Container, Box, Grid, TextField, Button, CssBaseline } from '@mui/material';
import axios from 'axios';

const theme = createTheme();

export default function Signup() {
    const [inputData, setInputData] = React.useState({
        userType: '',
        userName: '',
        firstName: '',
        lastName: '',
        userEmail: '',
        companyName: '',
        userPassword: ''
    });

    let { userType, userName, firstName, lastName, userEmail, companyName, userPassword } = inputData;

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem('Admin_Signup', JSON.stringify(inputData));

        // await axios
        //     .post('https://alecapi.sudocodesolutions.com/api/user/signup', inputData)
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error));

        setInputData({
            userType: '',
            userName: '',
            firstName: '',
            lastName: '',
            userEmail: '',
            companyName: '',
            userPassword: ''
        });
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box component="form" validate="true" onSubmit={handleSubmit} autoComplete="off" sx={{ mt: 3 }}>
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
                                            <MenuItem value="1">internal user</MenuItem>
                                            <MenuItem value="2">External User</MenuItem>
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
                                        value={userEmail}
                                        onChange={(e) => handleChange(e)}
                                        label="Email Address"
                                        name="userEmail"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={companyName}
                                        onChange={(e) => handleChange(e)}
                                        label="Compony Name"
                                        name="companyName"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        value={userPassword}
                                        onChange={(e) => handleChange(e)}
                                        name="userPassword"
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
