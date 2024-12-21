import { useState } from 'react';
import styles from './MobileNavbar.module.scss';
import { MenuIcon, CloseIcon, ArrowdownIcon, ArrowupIcon, LikeIcon, LoginIcon, CartIcon, LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { NavLink } from 'react-router-dom';
import { getRouteCart, getRouteCategories } from '../../../../app/routes/lib/helper';
import useOverflowHidden from '../../../../shared/hooks/useOverflowHidden';
import { ScrollToTop } from '../../../../shared/libs/scrollToTop';
import { LinkCustom } from '../../../../shared/ui/LinkCustom/LinkCustom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../../../../feature/AddToCart/model/cartSlice';
import { Text } from '../../../../shared/ui/Text/Text';

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const totalItems = useSelector(selectTotalItems); 
    useOverflowHidden(isOpen);

    const toggleMenu = () => {
        ScrollToTop();
        setIsOpen(!isOpen);
        setActiveDropdown(false);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        ScrollToTop();
    };

    const toggleDropdown = (title) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const onClickShop = (title) => {
        closeMenu()
        toggleDropdown(title)
    }

    return (
        <nav className={styles.mobileNavbar}>
            <Stack gap='8' justify='justifyBetween' align='alignCenter' className={styles.header}>
                <button className={styles.toggleMenu} onClick={toggleMenu}>
                    {<MenuIcon />}
                </button>
                <LogoIcon />
                <Stack gap="16">
                    <button>
                        {<LikeIcon />}
                    </button>
                    <Stack className={styles.cartContainer}>
                      {totalItems > 0 && <Text className={styles.totalItems}>{totalItems}</Text>}
                      <LinkCustom color='secondary' path={getRouteCart()} onClick={ScrollToTop}>
                          {<CartIcon />}
                      </LinkCustom>
                    </Stack>
                    <button>
                        {<LoginIcon />}
                    </button>
                </Stack>
            </Stack>

            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <Stack justify='justifyBetween' className={styles.logo_container}>
                    <button className={styles.toggleMenu} onClick={toggleMenu}>
                        {<CloseIcon />}
                    </button>
                    <LogoIcon />
                </Stack>
                {routes.filter(route => route.isNavbar).map(({ title, link }) => {
                    const isDropdownCategory = title === 'Магазин' ;
                    return (
                        <li key={title} className={styles.title}>
                            {isDropdownCategory ? (
                                <Stack justify="justifyBetween">
                                    <NavLink to={link} className={({ isActive }) =>
                                        `${styles.links} ${isActive ? styles.active : ''}`
                                    } onClick={() => onClickShop(title)}>
                                        {title}
                                    
                                    </NavLink>
                                    <button onClick={() => toggleDropdown(title)}>{activeDropdown === title ? <ArrowupIcon /> : <ArrowdownIcon />}</button>
                                </Stack>
                                
                            ) : (
                                <NavLink to={link} className={({ isActive }) =>
                                    `${styles.links} ${isActive ? styles.active : ''}`
                                } onClick={closeMenu}>{title}</NavLink>
                            )}

                            {activeDropdown === title && isDropdownCategory && (
                                <ul className={styles.titles}>
                                    {dropdownMenus['shop'].map((menu, index) => (
                                        <li key={index}>
                                            <button onClick={() => toggleSubmenu(index)}>
                                                {menu.title}
                                                {activeSubmenu === index ? <span>{<ArrowupIcon />}</span> : <span>{<ArrowdownIcon />}</span>}
                                            </button>
                                            {activeSubmenu === index && (
                                                <ul className={styles.subCategory}>
                                                    {menu.subCategories.map((subCategory, subIndex) => (
                                                        <li key={subIndex} onClick={closeMenu}>
                                                            <NavLink to={getRouteCategories(subCategory.params)} className={({ isActive }) =>
                                                                `${styles.link} ${isActive ? styles.active : ''}`
                                                            }>{subCategory.name}</NavLink>
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