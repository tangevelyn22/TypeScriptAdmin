
import { Grid, Paper, Box } from "@mui/material";
import {LandingSection} from "./LandingSections"
import '../../css/landing.css';

export const LandingDashboard = () => {
    return (
            
                <Box className='landingDashboard' justifyItems='center' alignItems='center'>
                    <Grid container spacing={8} display='flex'>
                        <Grid item xs={12} sm={6}>
                            <LandingSection />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LandingSection />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <LandingSection />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LandingSection />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <LandingSection />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LandingSection />
                        </Grid>
                    </Grid>
                </Box>
            
    );
}