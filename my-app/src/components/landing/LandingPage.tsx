
import { LandingHeading } from "./LandingHeading";
import { LandingDashboard } from "./LandingDashboard"
import { MenuDrawer } from "../menu/MenuDrawer";
import '../../css/landing.css';

export const LandingPage = () => {
    return (
        <>
        <MenuDrawer />
        <LandingHeading />
        <LandingDashboard />
        </>
    );
}
