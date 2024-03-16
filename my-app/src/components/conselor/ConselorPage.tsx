
import { LandingHeading } from "../landing/LandingHeading";
import { MenuDrawer } from "../menu/MenuDrawer";
import '../../css/landing.css';
import { InternationalOfficeMenuList } from "../menu/InternationalOfficeMenuList";

export const ConseolorPage = () => {
    return (
        <>
        <MenuDrawer>
            <InternationalOfficeMenuList />
            <LandingHeading />
        </MenuDrawer>
        </>
    );
}
