import { Error404 } from "../../widgets/Error404/Error404";
import styles from "./Error404Page.module.scss";

const Error404Page = () => {
    return (
        <main className={styles.container}>
            <Error404 />
        </main>
    )
}

export default Error404Page;
