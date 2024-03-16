
import { LandingHeading } from "./LandingHeading";
import { LandingDashboard } from "./LandingDashboard"
import { MenuDrawer } from "../menu/MenuDrawer";
import '../../css/landing.css';
import { AdminMenuList } from "../menu/AdminMenuList";

export const LandingPage = () => {
    return (
        <>
        <MenuDrawer> 
            <AdminMenuList />
        </MenuDrawer>
        <LandingHeading />
        <LandingDashboard />
        </>
    );
}
