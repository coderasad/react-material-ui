import React from 'react';
import {alpha, Box, Button, Container, Grid, Paper, ThemeProvider} from "@mui/material";

const Hello = () => {
    return (
        <>
            <Box
                sx={{
                    display      : 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    alignItems   : 'center',
                    bgcolor      : 'background.paper',
                    overflow     : 'hidden',
                    borderRadius : '12px',
                    boxShadow    : 1,
                    fontWeight   : 'bold',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height   : 233,
                        width    : 350,
                        maxHeight: {xs: 233, md: 167},
                        maxWidth : {xs: 350, md: 250},
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <Box
                    sx={{
                        display      : 'flex',
                        flexDirection: 'column',
                        alignItems   : {xs: 'center', md: 'flex-start'},
                        m            : 3,
                        minWidth     : {md: 350},
                    }}
                >
                    <Box component="span" sx={{fontSize: 16, mt: 1}}>
                        123 Main St, Phoenix AZ
                    </Box>
                    <Box component="span" sx={{color: 'primary.main', fontSize: 22}}>
                        $280,000 — $310,000
                    </Box>
                    <Box
                        sx={{
                            mt          : 1.5,
                            p           : 0.5,
                            bgcolor     : (theme) => alpha(theme.palette.primary.main, 0.1),
                            borderRadius: '5px',
                            color       : 'primary.main',
                            fontWeight  : 'medium',
                            display     : 'flex',
                            fontSize    : 12,
                            alignItems  : 'center',
                            '& svg'     : {
                                fontSize: 21,
                                mr      : 0.5,
                            },
                        }}
                    >
                        CONFIDENCE SCORE 85%
                    </Box>
                </Box>

            </Box>

            <Container maxWidth={"xl"}>
                <Grid container my={4} spacing={2} >
                    <Grid item lg={4} md={6} sm={4} >
                        <Paper sx={{height: '300px',bgcolor: '#007FFF'}}/>
                    </Grid>
                    <Grid item lg={4} md={6} sm={4} >
                        <Paper sx={{height: '300px',bgcolor: '#007FEE'}}/>
                    </Grid>
                    <Grid item lg={4} md={6} sm={4} >
                        <Paper sx={{height: '300px',bgcolor: '#004FDd'}}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Hello;