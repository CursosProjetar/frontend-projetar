import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const MenuBar = () => {

    return (
        <Container maxWidth="sm">
            <Grid
                height="100px"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={2}>
                    <Link to="/" >Home</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/courses" >Courses</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/login" >Login</Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MenuBar;