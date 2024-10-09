import { useState } from 'react';
import styles from './Navbar.module.scss';
import { logoIcon, likeIcon, cartIcon, loginIcon } from '../../../../shared/assets/svg/navbarIcons';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (title) => {
        if (title === 'Магазин' || title === 'Категории') {
            setActiveDropdown(title);
        }
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const getDropdownMenu = (title) => {
        switch (title) {
            case 'Магазин':
                return <DropdownMenu menuData={dropdownMenus.shop} />;
            case 'Категории':
                return <DropdownMenu menuData={dropdownMenus.categories} />;
            default:
                return null;
        }
    };

    return (
        <nav className={styles.navbar} onMouseLeave={handleMouseLeave}>
            <div className={styles.logo}>
                {logoIcon()}
            </div>
            <ul className={styles.navLinks}>
                {routes.map(({ title, link }) => (
                    <li key={title}
                        onMouseEnter={() => handleMouseEnter(title)}
                    >
                        <Link to={link}>{title}</Link>
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