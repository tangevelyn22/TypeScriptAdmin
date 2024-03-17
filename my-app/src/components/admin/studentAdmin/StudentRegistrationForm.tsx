import {Box, Menu, Grid, MenuItem, Stack, TextField, Typography, ButtonGroup, Button, colors} from '@mui/material'
import '../../../css/registrationForm.css'

export const StudentRegistrationForm = () => {
    return (
        <Box top='20px'>
            <Typography variant='h1'>Registration for Student</Typography>
            <Box top='20px' width='700px' className='registrationForm'>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} >
                    <TextField label='First Name' required variant='outlined' fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField label='Last Name' required variant='outlined' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Class' select variant='outlined' fullWidth>
                        <MenuItem value='2024'>Class of 2024</MenuItem>
                        <MenuItem value='2025'>Class of 2025</MenuItem>
                        <MenuItem value='2026'>Class of 2026</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='User Name' required variant='outlined' fullWidth inputProps={{maxLength: 10}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField label='Password' required variant='outlined' fullWidth inputProps={{maxLength: 30}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Street Address' variant='outlined' fullWidth inputProps={{maxLength: 30}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField label='City' variant='outlined' fullWidth inputProps={{maxLength: 30}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='State' select variant='outlined' fullWidth>
                        <MenuItem value='TX'>Texas</MenuItem>
                        <MenuItem value='AK'>Alaska</MenuItem>
                        <MenuItem value='AZ'>Arizona</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Zip Code' variant='outlined' fullWidth inputProps={{maxLength: 5}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Country'select variant='outlined' fullWidth>
                        <MenuItem value='US'>United States</MenuItem>
                        <MenuItem value='AF'>Afghanistan</MenuItem>
                        <MenuItem value='AX'>Åland Islands</MenuItem>
                        <MenuItem value='AL'>Albania</MenuItem>
                        <MenuItem value='DZ'>Algeria</MenuItem>
                        <MenuItem value='AS'>American Samoa</MenuItem>
                        <MenuItem value='UK'>United Kingdom</MenuItem>
                        <MenuItem value='CA'>Canada</MenuItem>
                        <MenuItem value='MX'>Mexico</MenuItem>
                        <MenuItem value='BZ'>Brazil</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
            <Box className='buttonGroup'>
                <Button className='buttonBack'>Cancel</Button>
                <Button className='buttonConfirm'>Confirm</Button>
            </Box>
            </Box>
        </Box>
    );
}