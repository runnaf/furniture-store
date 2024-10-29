import { useState, useCallback } from 'react';
import styles from './DesktopNavbar.module.scss';
import { LogoIcon, likeIcon, cartIcon, loginIcon } from '../../../../shared/assets/svg/navbarIcons';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const DesktopNavbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

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
            case 'Категории':
                return <DropdownMenu menuData={dropdownMenus.categories} onClose={handleMouseLeave} />;
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
                        <NavLink to={link} className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }>{title}</NavLink>
                        {activeDropdown === title && getDropdownMenu(title)}
                    </li>
                ))}
            </ul>
            <Stack gap="24">
                <button>
                    {likeIcon()}
                </button>
                <button>
                    {cartIcon()}
                </button>
                <button>
                    {loginIcon()}
                </button>
            </Stack>
        </nav>
    );
};