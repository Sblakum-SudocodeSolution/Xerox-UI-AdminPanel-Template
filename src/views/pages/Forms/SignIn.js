import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const theme = createTheme();

export default function Signin() {
    let navigate = useNavigate();

    const [inputVal, setInputVal] = useState({
        userName: '',
        password: ''
    });

    const [errMsg, setErrMsg] = useState('');

    let { userName, password } = inputVal;

    const handleChange = (e) => {
        setInputVal({ ...inputVal, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Admin_login = await JSON.parse(localStorage.getItem('Admin_Signup'));

        if (inputVal.userName === Admin_login.userName && inputVal.password === Admin_login.userPassword) {
            localStorage.setItem('Adminloggedin', true);
            navigate('/dashboard');
        } else {
            setErrMsg('Please enter valid UserName or Password*');
        }
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
                        <h6 style={{ color: 'red' }}>{errMsg}</h6>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} autoComplete="off">
                            <TextField
                                margin="normal"
                                fullWidth
                                required
                                label="User Name"
                                value={userName}
                                onChange={(e) => handleChange(e)}
                                name="userName"
                            />

                            <TextField
                                margin="normal"
                                required
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
