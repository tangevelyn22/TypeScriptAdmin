
import { Grid, Paper, Box } from "@mui/material";
import {LandingSection} from "./LandingSections"

export const LandingDashboard = () => {
    return (
        <Box width='800px' justifyItems='center' alignItems='center'>
            <Paper elevation={5}>
                
                <Grid container rowSpacing={2} columnSpacing={2} display='flex'>
                    <Grid className='leftColumn' item xs={6}>
                        <LandingSection />
                    </Grid>
                    <Grid className='leftColumn' item xs={6}>
                        <LandingSection />
                    </Grid>
                    <Grid item xs={6}>
                    <LandingSection />
                    </Grid>
                    <Grid item xs={6}>
                        <LandingSection />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}