import { getRouteAbout, getRouteFAQ } from "../../../app/routes/lib/helper";

export const data = { 
  content: 'Выбирайте из широкого ассортимента качественных товаров, созданных для дома с заботой о каждой детали. Наши коллекции созданы для того, чтобы сделать ваш дом уютным и современным.'
};

export const elements = [
  {
    title: 'Компания',
    links: [
      {
        text: 'О нас',
        path: getRouteAbout(),
      },
      {
        text: 'Блог',
        path: '',
      },
      {
        text: 'Контакты',
        path: '',
      },
      {
        text: 'Карьера',
        path: '',
      }
    ]
  },
  {
    title: 'Для пользователя',
    links: [
      {
        text: 'Личный кабинет',
        path: '',
      },
      {
        text: 'Отследить заказ',
        path: '',
      },
      {
        text: 'Возврат',
        path: '',
      },
      ,
      {
        text: 'Часто задаваемые вопросы',
        path: getRouteFAQ(),
      }
    ]
  },
  {
    title: 'О нас',
    links: [
      {
        text: 'Конфиденциальность',
        path: '',
      },
      {
        text: 'Условия использования',
        path:  '',
        },
      {
        text: 'Политика возврата',
        path: '',
      },
    ]
  },
];

export const contacts = {
  tel: '+0123-456-789',
  email: 'example@gmail.com',
  adress: '8502 Preston Rd. Inglewood, Maine 98380'
};
