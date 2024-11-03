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


export const reviewData = {
    ratingScore: 4.9,
    totalReviews: 245,
    ratingBreakdown: [
        { stars: 5, count: 200 },
        { stars: 4, count: 30 },
        { stars: 3, count: 10 },
        { stars: 2, count: 3 },
        { stars: 1, count: 2 }
    ],
    reviews: [
        {
            userName: "Kristin Watson",
            verified: true,
            title: "Ultimate Comfort and Support - A Gamer's Dream Chair!",
            text: "I've been using this gaming chair for a few weeks now, and I have to say, it's been a game-changer for me. The comfort level is off the charts, and I no longer feel sore after long gaming sessions. Definitely worth the investment!",
            rating: 5.0,
            date: "1 month ago",
            media: []
        },
        {
            userName: "Kristin",
            verified: true,
            title: "Ultimate Comfort and Support - A Gamer's Dream Chair!",
            text: "I've been using this gaming chair for a few weeks now, and I have to say, it's been a game-changer for me. The comfort level is off the charts, and I no longer feel sore after long gaming sessions. Definitely worth the investment!",
            rating: 5.0,
            date: "1 month ago",
            media: []
        },
    ]
};