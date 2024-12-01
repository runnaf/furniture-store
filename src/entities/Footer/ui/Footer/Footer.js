import { FooterCopyright } from "../FooterCopyright/FooterCopyright";
import { FooterNavbar } from "../FooterNavbar/FooterNavbar";

//TODO - расширить визуал ссылки - тоже нижнее подчеркивание, как у меню и кнопок регистрации и авторизациии
export const Footer = () => {
  return (
    <footer>
      <FooterNavbar />
      <FooterCopyright />
    </footer>
  );
};
