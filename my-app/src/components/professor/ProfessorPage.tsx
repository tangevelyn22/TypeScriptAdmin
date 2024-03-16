
import { LandingHeading } from "../landing/LandingHeading";
import { MenuDrawer } from "../menu/MenuDrawer";
import '../../css/landing.css';
import { ProfessorMenuList } from "../menu/ProfessorMenuList";

export const ProfessorPage = () => {
    return (
        <>
        <MenuDrawer>
            <ProfessorMenuList />
            <LandingHeading />
        </MenuDrawer>
        </>
    );
}
