
import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import '../../css/landing.css';

export const LandingSection = () => {
    return (
        <Paper className='landingSection' elevation={5}>
            <Typography variant='h4' component='div'>
                SignUp
            </Typography>
            <Typography variant='body1' component='div'>
                this is a text
            </Typography>
        </Paper>
    )
}