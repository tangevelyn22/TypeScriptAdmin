
import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import '../../css/landing.css';

interface LandingContent {
    section :{
        sectionHeader: string;
        sectionContent: string;
        sectionLink?: string;
    }
}


export const LandingSection = (content:LandingContent) => {
    return (
        <Paper className='landingSection' elevation={5}>
            <Typography variant='h4' component='div'>
                {content.section.sectionHeader}
            </Typography>
            <Typography variant='body1' component='div'>
            {content.section.sectionContent}
            </Typography>
        </Paper>
    )
}