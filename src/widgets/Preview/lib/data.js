import livingRoom from '../../../shared/assets/blogPoster/wardrobe_livingRoom.jpg';
import bedroom from '../../../shared/assets/blogPoster/trends_2024.jpg';
import bathroom from '../../../shared/assets/blogPoster/bathroom.jpg';
import kitchen from '../../../shared/assets/blogPoster/online_shop.jpg'

export const card = [
    {
        name: 'Гостинная',
        category: 'livingRoom',
        quantity: 2500,
        image: livingRoom,
        id: 0,
    },
    {
        name: 'Спальня',
        category: 'bedroom',
        quantity: 2000,
        image: bedroom,
        id: 1,
    },
    {
        name: 'Ванная',
        category: 'bathroom',
        quantity: 2500,
        image: bathroom,
        id: 2,
    },
    {
        name: 'Кухня',
        category: 'kitchen',
        quantity: 3500,
        image: kitchen,
        id: 3,
    },
];

export const QUANTITY_CARD_ON_PAGE = 1;
