
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./Error404.module.scss";

export const Error404 = () => {
    return (
        <section className={styles.container}>
            <Text>404</Text>
            <Text size='xxl'>Упс! Страница не найдена</Text>
            <Text>Страница, которую вы ищете, не найдена. Сделайте перерыв, прежде чем повторить попытку</Text>
            <LinkCustom path={getRouteMain()}>
                Вернуться на главную страницу
            </LinkCustom>
        </section>
    );
};

