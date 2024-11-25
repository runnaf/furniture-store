import { FooterCopyright } from "../FooterCopyright/FooterCopyright";
import { FooterNavbar } from "../FooterNavbar/FooterNavbar";
import styles from "./Footer.module.scss";

export const Footer = () => {

  return (
      <footer className={styles.footer}>
        <FooterNavbar />
        <FooterCopyright />          
      </footer>
  );
};