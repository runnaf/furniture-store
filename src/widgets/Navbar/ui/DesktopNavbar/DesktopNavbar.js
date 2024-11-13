import { useState, useCallback, useEffect } from 'react';
import styles from './DesktopNavbar.module.scss';
import { LogoIcon, LikeIcon, CartIcon, LoginIcon } from '../../../../shared/assets/svg/navbarIcons';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { ScrollToTop } from '../../../../shared/libs/scrollToTop';

export const DesktopNavbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation(); // Получаем текущий путь

  // useEffect срабатывает при изменении пути
    useEffect(() => {
        setActiveDropdown(false); // Скрываем меню при переходе по ссылке
    }, [location]);

    const handleMouseEnter = (title) => {
        if (activeDropdown !== title) {
            setActiveDropdown(title);
        }
    };

    const handleMouseLeave = useCallback(() => {
        setActiveDropdown(null);
    }, []);

    const getDropdownMenu = (title) => {
        switch (title) {
            case 'Магазин':
                return <DropdownMenu menuData={dropdownMenus.shop} onClose={handleMouseLeave} />;
            default:
                return null;
        }
    };

    return (
        <nav
            className={styles.navbar}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <ul className={styles.navLinks}>
                {routes.filter(route => route.isNavbar).map(({ title, link }) => (
                    <li key={title}
                        onMouseEnter={() => handleMouseEnter(title)}
                    >
                        <NavLink 
                        to={link} className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ''}`
                        } 
                        onClick={ScrollToTop()}>{title}</NavLink>
                        {activeDropdown === title && getDropdownMenu(title)}
                    </li>
                ))}
            </ul>
            <Stack gap="24">
                <button>
                    {<LikeIcon />}
                </button>
                <button>
                    {<CartIcon />}
                </button>
                <button>
                    {<LoginIcon />}
                </button>
            </Stack>
        </nav>
    );
};