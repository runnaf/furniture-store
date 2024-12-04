import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./FooterCopyright.module.scss";

export const FooterCopyright = () => {
  return (
    <Stack className={styles.container}>
      <Stack>Copyright © 2024 Furniture. All Rights Reserved.</Stack>
    </Stack>
  );
};
