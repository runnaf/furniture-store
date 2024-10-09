import { useState } from 'react';
import styles from './MobileNavbar.module.scss';
import { logoIcon, menuIcon, closeIcon, arrowdownIcon, arrowupIcon, likeIcon, loginIcon, cartIcon } from '../../../../shared/assets/svg/navbarIcons';
import { routes } from '../../../../app/routes/lib/data';
import { dropdownMenus } from '../../libs/data';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { getRouteCategories } from '../../../../app/routes/lib/helper';

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                <button onClick={toggleMenu}>
                    {isOpen ? closeIcon() : menuIcon()}
                </button>
                {logoIcon()}
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
            </Stack>

            {isOpen && (
                <ul className={styles.navLinks}>
                    {routes.map(({ title, link }) => {
                        const isDropdownCategory = title === 'Магазин' || title === 'Категории';

                        return (
                            <li key={title}>
                                <Link to={link}>
                                    <button onClick={() => toggleDropdown(title)}>
                                        {title}
                                        {isDropdownCategory && (
                                            activeDropdown === title ? <span>{arrowupIcon()}</span> : <span>{arrowdownIcon()}</span>
                                        )}
                                    </button>
                                </Link>

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
                                                            <li key={subIndex}>
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





















// import React, { useState } from 'react';
// import styles from './MobileNavbar.module.scss';
// import { logoIcon, menuIcon, closeIcon, arrowdownIcon, arrowupIcon } from '../../../../shared/assets/svg/navbarIcons';
// import { routes } from '../../../../app/routes/lib/data';
// import { dropdownMenus } from '../../libs/data';
// import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
// import { Stack } from '../../../../shared/ui/Stack/Stack';

// export const MobileNavbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const toggleDropdown = (title) => {
//         setActiveDropdown(activeDropdown === title ? null : title);
//     };

//     return (
//         <Stack direction='column' className={styles.mobileNavbar}>
//             <Stack justify='justifyBetween' align='alignCenter' className={styles.header}>
//                 {logoIcon()}
//                 <button onClick={toggleMenu}>
//                     {isOpen ? closeIcon() : menuIcon()}
//                 </button>
//             </Stack>

//             {isOpen && (
//                 <ul className={styles.navLinks}>
//                     {routes.map(({ title }) => {
//                         const isDropdownCategory = title === 'Магазин' || title === 'Категории';

//                         return (
//                             <li key={title}>
//                                 <button onClick={() => toggleDropdown(title)}>
//                                     {title}
//                                     {/* Отображаем иконки только для категорий "Магазин" и "Категории" */}
//                                     {isDropdownCategory && (
//                                         activeDropdown === title ? <span>{arrowupIcon()}</span> : <span>{arrowdownIcon()}</span>
//                                     )}
//                                 </button>
//                                 {/* Используем DropdownMenu только для "Магазин" и "Категории" */}
//                                 {activeDropdown === title && isDropdownCategory && (
//                                     <DropdownMenu menuData={title === 'Магазин' ? dropdownMenus.shop : dropdownMenus.categories} />
//                                 )}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             )}

//         </Stack>
//     );
// };
