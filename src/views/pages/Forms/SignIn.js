import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router';

const theme = createTheme();

export default function Signin() {
    let navigate = useNavigate();

    const [inputVal, setInputVal] = React.useState({
        userName: '',
        password: ''
    });

    let { userName, password } = inputVal;

    const handleChange = (e) => {
        setInputVal({ ...inputVal, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const Admin_login = JSON.parse(localStorage.getItem('Admin_Signup'));

        if (inputVal.userName === Admin_login.userName && inputVal.password === Admin_login.password) {
            localStorage.setItem('Admin-loggedin', true);
            navigate('/utils/dashboard');
        } else {
            alert('Wrong userName Or Password');
        }
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
                        <Box component="form" onSubmit={handleSubmit} validate sx={{ mt: 1 }} autoComplete="off">
                            <TextField
                                margin="normal"
                                fullWidth
                                label="User Name"
                                value={userName}
                                onChange={(e) => handleChange(e)}
                                name="userName"
                            />
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                value={password}
                                onChange={(e) => handleChange(e)}
                                name="password"
                                label="Password"
                                type="password"
                            />

                            <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                    <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                                        Sign In
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
