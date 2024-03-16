
import { Grid, Paper, Box } from "@mui/material";
import {LandingSection} from "./LandingSections"
import '../../css/landing.css';

export const LandingDashboard = () => {
    return (
            <Box className='landingDashboard' justifyItems='center' alignItems='center'>
                <Grid container spacing={8} display='flex'>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'StudentDashboard',sectionContent:'student infomation'}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'CourseDashboard',sectionContent:'Course Registration info'}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <LandingSection section={{sectionHeader:'VisaDashboard',sectionContent:'Progress of students visa status'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'ProfessorDashboard',sectionContent:'the courses that professor could view'}} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LandingSection section={{sectionHeader:'AssignProfessor',sectionContent:'Assign Professor to specific course'}} />
                    </Grid>
                </Grid>
            </Box>
    );
}