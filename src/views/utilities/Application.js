import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stepper from 'views/Stepper/Stepper';

const theme = createTheme();

export default function Application() {
    return (
        <>
            <MainCard title="Application">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <ThemeProvider theme={theme}>
                            <Container component="main" maxWidth="lg">
                                <CssBaseline />
                                <Row className="mt-4">
                                    <Stepper />
                                </Row>
                            </Container>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
}
