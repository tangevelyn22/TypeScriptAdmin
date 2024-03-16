

import {Box, List, ListItem, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export const MenuList = () => {
    return (
        <Box className='menuList'>
            <List>
                <Box className='menuBox'>
                <ListItem >
                        <Typography variant='h5' fontFamily='Romans'>Item 1</Typography>
                </ListItem>
                </Box>
                
                <Box className='menuBox'>
                <ListItem>
                        <Typography variant='h5' fontFamily='Romans'> Item 2</Typography>
                </ListItem>
                </Box>

            </List>
        </Box>
    );
}