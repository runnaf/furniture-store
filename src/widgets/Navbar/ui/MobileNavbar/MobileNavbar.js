import { useState } from 'react';
import styles from './MobileNavbar.module.scss';
import { logoIcon, menuIcon, closeIcon, arrowdownIcon, arrowupIcon, likeIcon, loginIcon, cartIcon } from '../../../../shared/assets/svg/navbarIcons';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { getRouteCategories } from '../../../../app/routes/lib/helper';
import { getStyles } from '../../../../shared/libs/getStyles';

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleDropdown = (title) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const mode = {
        [styles.open]: isOpen,
    };

    return (
        <nav className={getStyles(styles.mobileNavbar, mode, [])}>
            <Stack justify='justifyBetween' align='alignCenter' className={styles.header}>
                <button className={styles.toggleMenu} onClick={toggleMenu}>
                    {isOpen ? closeIcon() : menuIcon()}
                </button>
                {logoIcon()}
                {!isOpen ? (
                    <Stack gap="16">
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
                ) : null}
            </Stack>

            {isOpen && (
                <ul className={styles.navLinks}>
                    {routes.map(({ title, link }) => {
                        const isDropdownCategory = title === 'Магазин' || title === 'Категории';

                        return (
                            <li key={title} className={styles.title}>
                                {isDropdownCategory ? (
                                    <button onClick={() => toggleDropdown(title)}>
                                        {title}
                                        {activeDropdown === title ? <span>{arrowupIcon()}</span> : <span>{arrowdownIcon()}</span>}
                                    </button>
                                ) : (
                                    <Link to={link} className={styles.links} onClick={closeMenu}>{title}</Link>
                                )}

                                {activeDropdown === title && isDropdownCategory && (
                                    <ul className={styles.titles}>
                                        {dropdownMenus[title === 'Магазин' ? 'shop' : 'categories'].map((menu, index) => (
                                            <li key={index}>
                                                <button onClick={() => toggleSubmenu(index)}>
                                                    {menu.title}
                                                    {activeSubmenu === index ? <span>{arrowupIcon()}</span> : <span>{arrowdownIcon()}</span>}
                                                </button>
                                                {activeSubmenu === index && (
                                                    <ul className={styles.subCategory}>
                                                        {menu.subCategories.map((subCategory, subIndex) => (
                                                            <li key={subIndex} onClick={closeMenu}>
                                                                <Link to={getRouteCategories(subCategory.params)}>{subCategory.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};