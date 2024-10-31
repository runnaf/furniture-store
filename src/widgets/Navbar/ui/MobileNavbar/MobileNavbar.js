import { useState } from 'react';
import styles from './MobileNavbar.module.scss';
import { menuIcon, closeIcon, arrowdownIcon, arrowupIcon, likeIcon, loginIcon, cartIcon, LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { getRouteCategories } from '../../../../app/routes/lib/helper';
import useOverflowHidden from '../../../../shared/hooks/useOverflowHidden';

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    useOverflowHidden(isOpen);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
    };

    const toggleDropdown = (title) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <nav className={styles.mobileNavbar}>
            <Stack justify='justifyBetween' align='alignCenter' className={styles.header}>
                <button className={styles.toggleMenu} onClick={toggleMenu}>
                    {menuIcon()}
                </button>
                <LogoIcon />
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
            </Stack>

            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <Stack justify='justifyBetween' className={styles.logo_container}>
                    <button className={styles.toggleMenu} onClick={toggleMenu}>
                        {closeIcon()}
                    </button>
                    <LogoIcon />
                </Stack>
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
        </nav>
    );
};