
import { Grid, Paper, Box } from "@mui/material";
import {LandingSection} from "./LandingSections"
import '../../css/landing.css';

export const LandingDashboard = () => {
    return (
            <Box className='landingDashboard' justifyItems='center' alignItems='center'>
                <Grid container spacing={8} display='flex'>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'StudentDashboard',sectionContent:'student'}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'Contracts',sectionContent:'contracts'}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <LandingSection section={{sectionHeader:'Learning Progress',sectionContent:'Progress'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'Courses',sectionContent:'course'}} />
                    </Grid>
                    
                </Grid>
            </Box>
    );
}