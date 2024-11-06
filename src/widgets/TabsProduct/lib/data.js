//import review from '../../../shared/assets/svg/reviewImg.svg'

export const tabs = [
    { id: 'description', label: 'Описание' },
    { id: 'additional', label: 'Дополнительная информация' },
    { id: 'review', label: 'Отзывы' },
];



export const descriptionData = {
    descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    listItems: [
        "100% Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Ut at nunc vel nisi gravida dictum.",
        "Donec non velit sed risus tincidunt suscipit.",
        "Cras laoreet lacus in dui posuere fringilla."
    ]
};

export const additionalInfoData = [
    { feature: "Материал сиденья", description: "Кожа" },
    { feature: "Цвет", description: "Черный, Коричневый, Серый, Зеленый, Синий" },
    { feature: "Вес", description: "25 килограммов" },
    { feature: "Размеры", description: "21\"Д x 21\"Ш x 48\"В" },
    { feature: "Бренд", description: "KD Design" }
];


export const reviews = [
        {
            name: "Алексей П.",
            title: "Отличное кресло",
            verified: true,
            text: "Кресло очень удобное и стильное. Супер комфорт для длительного сидения.",
            rating: 5,
            date: "2023-09-01",
            id:0,
        },
        {
            name: "Мария С.",
            title: "Не совсем то, что ожидала",
            verified: false,
            text: "Кресло красивое, но немного жестковатое для меня.",
            rating: 3.9,
            date: "2024-09-02", 
            id: 1
        },
        {
            name: "Иван К.",
            title: "Превосходное качество",
            verified: true,
            text: "Очень качественные материалы и отличная сборка. Рекомендую!",
            rating: 5,
            date: "2024-08-03", 
            id: 2
        },
        {
            name: "Екатерина Л.",
            title: "Отличное кресло для работы",
            verified: true,
            text: "Идеально подходит для офиса. Поддержка спины на высшем уровне.",
            rating: 4,
            date: "2024-07-04", 
            id: 3
        },
        {
            name: "Дмитрий Н.",
            title: "Комфорт и стиль",
            verified: true,
            text: "Кресло отлично вписывается в интерьер комнаты. Очень доволен!",
            rating: 5,
            date: "2024-06-05", 
            id: 4
        },
        {
            name: "Наталья М.",
            title: "Не хватает подлокотников",
            verified: false,
            text: "Кресло хорошее, но без подлокотников мне не хватает комфорта.",
            rating: 5,
            date: "2024-06-06", 
            id: 5
        },
        {
            name: "Сергей В.",
            title: "Куплю еще одно",
            verified: true,
            text: "Очень понравилось! Куплю такое же для своей дочери.",
            rating: 4.8,
            date: "2024-10-07",
            id: 6
        },
        {
            name: "Ольга З.",
            title: "Требует времени на привыкание",
            verified: false,
            text: "Сначала было непривычно, но потом стало удобно.",
            rating: 4,
            date: "2023-11-08", 
            id: 7
        },
        {
            name: "Виктор Т.",
            title: "Бюджетный вариант",
            verified: true,
            text: "Кресло неплохое за свою цену, но есть и недостатки.",
            rating: 4,
            date: "2023-09-09", 
            id: 8
        },
        {
            name: "Константин Р.",
            title: "Отличный выбор для геймеров",
            verified: true,
            text: "Идеально подходит для длительных игровых сессий!",
            rating: 5,
            date: "2023-12-10", 
            id: 9
        },
        {
            name: "Анастасия А.",
            title: "Многофункциональное кресло",
            verified: true,
            text: "Отлично для работы и отдыха. Удобно регулируется.",
            rating: 4,
            date: "2024-09-11", 
            id: 10
        },
        {
            name: "Григорий Д.",
            title: "Подходит не для всех",
            verified: false,
            text: "Слишком широкое для меня, но качественное.",
            rating: 5,
            date: "2023-11-12", 
            id: 11
        },
        {
            name: "Людмила П.",
            title: "Недостатки",
            verified: false,
            text: "Кресло стало squeak через месяц использования, неудобно.",
            rating: 4.8,
            date: "2024-10-13", 
            id: 12
        },
        {
            name: "Антон С.",
            title: "Замечательное кресло",
            verified: true,
            text: "Удобное кресло, радует глаз. Все очень понравилось.",
            rating: 5,
            date: "2024-06-14", 
            id: 13
        },
        {
            name: "Дана К.",
            title: "Стиль и комфорт",
            verified: true,
            text: "Рекомендую всем! Отличное сочетание стиля и удобства.",
            rating: 5,
            date: "2024-08-15", 
            id: 14
        },
        {
            name: "Светлана Т.",
            title: "Качество среднее",
            verified: false,
            text: "После нескольких месяцев использования появились проблемы.",
            rating: 4.3,
            date: "2023-12-16", 
            id: 15
        },
        {
            name: "Павел И.",
            title: "Повторная покупка",
            verified: true,
            text: "Купил еще одно для сына. Опыт позитивный.",
            rating: 4,
            date: "2024-07-17", 
            id: 16
        },
        {
            name: "Николай Л.",
            title: "Выбор стоит своих денег",
            verified: true,
            text: "Кресло стоит каждой потраченной копейки!",
            rating: 5,
            date: "2024-08-18", 
            id: 17
        },
        {
            name: "Мария Щ.",
            title: "Неудовлетворена",
            verified: false,
            text: "Кресло не соответствует описанию. Жесткое и неудобное.",
            rating: 3.2,
            date: "2024-09-19", 
            id: 18
        },
        {
            name: "Юрий Х.",
            title: "Покупка удачная",
            verified: true,
            text: "Супер кресло! Классный дизайн и отличное качество.",
            rating: 5,
            date: "2023-08-20", 
            id: 19
        },
        {
            name: "Елена Ю.",
            title: "Для офиса - отлично!",
            verified: true,
            text: "Советую для офисного использования, очень удобно.",
            rating: 4,
            date: "2023-09-21", 
            id: 20
        },
    ]

export const QUANTITY_REVIEWS_ON_PAGE = 5 