import PropTypes from 'prop-types';
import { Box, Card, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===============================|| COLOR BOX ||=============================== //

let user = JSON.parse(localStorage.getItem('Admin_Signup'));

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

export default function Dashboard() {
    return (
        <>
            <MainCard title="Dashboard">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <h1>Welcome To Admin Panel </h1>
                        {user.userType === '1' ? <h1>Internal User</h1> : <h1>External User</h1>}
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
}
