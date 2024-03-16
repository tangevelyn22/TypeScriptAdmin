

import { Button, Stack, Typography } from "@mui/material";
import '../../css/landing.css';


export const LandingHeading = () => {
    return (
        <Stack className='landingHeading' direction='row'>
            <Typography variant='h1' fontFamily='Georgia'> Dashboard </Typography>
            <Button>Button</Button>
        </Stack>
    );
}