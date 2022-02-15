import React from 'react';
import {Container, Grid} from "@mui/material";

const GridRow = () => {
    return (
        <Container maxWidth='lg' sx={{ backgroundColor:'red'}} >
            <Grid container spacing={2} style={{ backgroundColor:'blue' }}>
                <Grid item lg={8} style={{ backgroundColor:'green' }}>
                    <p>Col xs={8} </p>
                </Grid>
                <Grid item xs={4} style={{ backgroundColor:'pink' }}>
                    <p>Col xs={4} </p>
                </Grid>
                <Grid item xs={4} style={{ backgroundColor:'gray' }}>
                    <p>Col xs={4} </p>
                </Grid>
                <Grid item xs={8} style={{ backgroundColor:'gold' }}>
                    <p>Col xs={8} </p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GridRow;