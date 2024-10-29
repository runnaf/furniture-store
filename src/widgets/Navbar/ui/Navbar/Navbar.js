import { useResize } from "../../../../shared/hooks/useResize";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { DesktopNavbar } from "../DesktopNavbar/DesktopNavbar";

export const Navbar = () => {
    const width = useResize();
    const isMobile = width < 820;

    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};