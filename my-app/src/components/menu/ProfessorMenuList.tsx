

import {Box, List, ListItem, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

export const ProfessorMenuList = () => {
    return (
        <Box className='menuList'>
            <List>
                <Box className='menuBox'>
                <ListItem >
                        <Typography variant='h5' fontFamily='Romans'>Home</Typography>
                </ListItem>
                </Box>
            </List>
        </Box>
    );
}