
import {Stack, Drawer, List, ListItem, IconButton, Typography} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";
import { MenuList } from './MenuList'
import '../../css/menu.css';

export const MenuDrawer = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawer = () => {
        return setOpenDrawer(!openDrawer);
    }

    return(
        <>
        <Stack direction='row'>
            <Drawer className='menuDrawer' anchor='left' open={openDrawer} onClose={handleDrawer}>
            <Typography className='menuHeader' variant='h2'> Menu </Typography>
            <MenuList />
            </Drawer>
            <IconButton className='menuOpenButton' size='large' edge='start' onClick={handleDrawer}>
                <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
            </IconButton>
        </Stack>
        </>
    );
}