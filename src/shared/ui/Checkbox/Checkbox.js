import { CheckmarkIcon } from '../../assets/svg/checkmarkIcon';
import styles from './Checkbox.module.scss';

export const Checkbox = ({ checked, name, onChange, children }) => {

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        onChange(name, checked);
    };

    return (
        <label className={styles.label} htmlFor={name}>
            <div className={styles.checkbox}>
                <input
                    type="checkbox"
                    name={name}
                    id={name}
                    className={styles.hiddenCheckbox}
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <span className={styles.customCheckbox}>
                    <CheckmarkIcon />
                </span>
            </div>
            <span className={styles.text}>{children} </span>
        </label>
    );
};
