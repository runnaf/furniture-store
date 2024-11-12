import styles from './Modal.module.scss';
import {motion as m} from "framer-motion";

export const Modal = ({ setIsOpen, children }) => {

    const handleClick = e => {
        if (e.target.dataset.class === 'overlay') {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.modal}>
            <div
                className={styles.overlay}
                data-class="overlay"
                onClick={handleClick}
            >
                <m.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </m.div>
            </div>
        </div>
    );
};
