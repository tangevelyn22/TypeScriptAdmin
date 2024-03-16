

import {Box, List, ListItem, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export const AdminMenuList = () => {
    return (
        <Box className='menuList'>
            <List>
                <Box className='menuBox'>
                <ListItem >
                        <Typography variant='h5' fontFamily='Romans'>Course Dashboard</Typography>
                </ListItem>
                </Box>
                
                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> Visa Info Dashboard</Typography>
                </ListItem>
                </Box>

                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> Student Dashboard</Typography>
                </ListItem>
                </Box>

                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> Professor Dashboard</Typography>
                </ListItem>
                </Box>

                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> Assign Professor To Course Dashboard</Typography>
                </ListItem>
                </Box>

            </List>
        </Box>
    );
}