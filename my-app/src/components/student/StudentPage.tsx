
import { LandingHeading } from "../landing/LandingHeading";
import { MenuDrawer } from "../menu/MenuDrawer";
import '../../css/landing.css';
import { StudentMenuList } from "../menu/StudentMenuList";

export const StudentPage = () => {
    return (
        <>
        <MenuDrawer>
            <StudentMenuList />
            <LandingHeading />
        </MenuDrawer>
        </>
    );
}
