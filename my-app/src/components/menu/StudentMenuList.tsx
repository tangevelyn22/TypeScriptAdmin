

import {Box, List, ListItem, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export const StudentMenuList = () => {
    return (
        <Box className='menuList'>
            <List>
                <Box className='menuBox'>
                <ListItem >
                        <Typography variant='h5' fontFamily='Romans'>Home (My Course)</Typography>
                </ListItem>
                </Box>
                
                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> Course Registration </Typography>
                </ListItem>
                </Box>

                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> My Visa Info </Typography>
                </ListItem>
                </Box>
            </List>
        </Box>
    );
}