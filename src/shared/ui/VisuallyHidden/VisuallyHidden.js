import styles from "./VisuallyHidden.module.scss"

export const VisuallyHidden = ({children}) => {
    return (
        <span className={styles.visuallyHidden}>{children}</span>
    )
}
