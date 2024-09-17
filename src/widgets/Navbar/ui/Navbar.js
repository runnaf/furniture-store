import styles from './Navbar.module.scss';
import { logoIcon, searchIcon, likeIcon, cartIcon, loginIcon } from '../../../shared/assets/svg/navbarIcons';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { routes } from '../../../app/routes/lib/data';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {logoIcon()}
            <Stack className={styles.navLinks}>
                {routes.map(item => {
                    const { title, link } = item;
                    return (
                        <ul key={title}>
                            <li>
                                <Link to={link}>{title}</Link>
                            </li>
                        </ul>
                    )
                })}
            </Stack>
            <Stack gap="24">
                <button>
                    {searchIcon()}
                </button>
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
