import React from 'react';
import {createTheme, Grid, ThemeProvider, Typography} from "@mui/material";

const TripleChoice = () => {

    const theme = createTheme({
        palette: {
            primary  : {
                main: '#3497D3',
            },
            secondary: {
                main: '#F2B538',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid>
                <Grid container>
                    <Grid item lg={6}>
                        <Typography variant={'body1'}>Call or Text:
                            <Typography component={'span'}  color="secondary" >833-883-0123</Typography>
                        </Typography>
                    </Grid>
                    <Grid item lg={6}>

                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default TripleChoice;