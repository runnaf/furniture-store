import styles from './Header.module.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon, youtubeIcon } from '../../../shared/assets/svg/headerIcons';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { crossIcon } from '../../../shared/assets/svg/crossIcon';
import { useState } from 'react';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;
    return (
        <header className={styles.header}>
            <Stack justify="justifyAround" align="alignCenter">
                <Stack>
                    <p className={styles.phone}>Call Us: +123-456-789</p>
                </Stack>
                <Stack>
                    <p>Sign up and GET 25% OFF for your first order. <a href="/signup">Sign up now</a></p>
                </Stack>
                <Stack gap="8" className={styles.socials}>
                    <button>
                        {facebookIcon()}
                    </button>
                    <button>
                        {twitterIcon()}
                    </button>
                    <button>
                        {pinterestIcon()}
                    </button>
                    <button>
                        {instagramIcon()}
                    </button>
                    <button>
                        {youtubeIcon()}
                    </button>
                </Stack>
                <button className={styles.cross} onClick={handleClose}>
                    {crossIcon()}
                </button>
            </Stack>
        </header>
    );
};
