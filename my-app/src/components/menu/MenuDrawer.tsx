
import {Stack, Drawer, List, ListItem, IconButton, Typography} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { ReactNode, useState } from "react";
import { AdminMenuList } from './AdminMenuList'
import '../../css/menu.css';

// to pass different list components be used in drawer
interface LayoutProps {
    children: ReactNode
}

export const MenuDrawer = ({children, ...props}:LayoutProps) => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawer = () => {
        return setOpenDrawer(!openDrawer);
    }

    return(
        <>
        <Stack direction='row'>
            <Drawer className='menuDrawer' anchor='left' open={openDrawer} onClose={handleDrawer}>
            <Typography className='menuHeader' variant='h2'> Menu </Typography>
                {children}
            </Drawer>
            <IconButton className='menuOpenButton' size='large' edge='start' onClick={handleDrawer}>
                <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
            </IconButton>
        </Stack>
        </>
    );
}