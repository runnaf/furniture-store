import styles from './Navbar.module.scss';
import { logoIcon, searchIcon, likeIcon, cartIcon, loginIcon } from '../../../shared/assets/svg/navbarIcons';
import { Stack } from '../../../shared/ui/Stack/Stack';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Stack>
                {logoIcon()}
            </Stack>
            <Stack className={styles.navLinks}>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/categories">Categories</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/blog">Blog</a>
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

export default Navbar;
