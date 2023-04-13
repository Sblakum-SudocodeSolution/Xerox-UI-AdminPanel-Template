import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const theme = createTheme();

export default function Profile() {
    const data = JSON.parse(localStorage.getItem('Admin_Signup'));
    console.log('Profile : ', data.companyName);
    return (
        <>
            <MainCard title="Profile">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <ThemeProvider theme={theme}>
                            <Container component="main">
                                <CssBaseline />
                                <Row className="mt-2">
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                {data.userName.charAt(0).toUpperCase()}
                                            </Avatar>
                                        }
                                        title=<h4>{data.userName}</h4>
                                    />
                                    <div className="card-body">
                                        <p className="text-justify mt-4">
                                            <strong className="mb-2">
                                                <PersonIcon />{' '}
                                            </strong>
                                            {data.firstName} {data.lastName}
                                        </p>

                                        <p className="text-justify mt-4">
                                            <strong className="mb-2">
                                                <EmailIcon />{' '}
                                            </strong>
                                            {data.userEmail}
                                        </p>

                                        <p className="text-justify mt-4">
                                            <strong className="mb-2">
                                                <KeyIcon />{' '}
                                            </strong>
                                            {data.userPassword}
                                        </p>

                                        <p className="text-justify mt-4">
                                            <strong className="mb-2">
                                                <HomeWorkIcon />{' '}
                                            </strong>
                                            {data.companyName}
                                        </p>
                                    </div>
                                </Row>
                            </Container>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
}
