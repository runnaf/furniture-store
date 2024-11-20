import bed from '../../../shared/assets/jpg/bed.jpg';
import chair from '../../../shared/assets/jpg/chair.jpg';
import sofa from '../../../shared/assets/jpg/sofa.jpg';
import chair2 from '../../../shared/assets/jpg/sofa-chair.jpg';

export const buttons = [
    { id: 1, label: 'Все товары', filter: 'all' },
    { id: 2, label: 'Рекомендуемые', filter: 'recommended' },
    { id: 3, label: 'Популярное', filter: 'popular' },
    { id: 4, label: 'Новинки', filter: 'new' }
];


export const cards = [
    {
        id: 1,
        image: chair,
        promotion: 30,
        timer: '2024-12-31T23:59:59',
        category: 'Кресла',
        name: 'Кресло Olivia',
        price: 9000,
        newPrice: 6300,
        rating: '4.9',
        cardText: 'Cтильный и функциональный элемент интерьера, который станет отличным дополнением вашего дома.',
        colors: ['Желтый', 'Серый']
    },
    {
        id: 2,
        image: bed,
        promotion: 15,
        category: 'Кровати',
        name: 'Кровать Moonshine',
        price: 27600,
        newPrice: 23500,
        rating: 4.9,
        cardText: 'Двуспальная кровать с подъемным механизмом и мягким изголовьем - это сочетание комфорта и функциональности.',
        colors: ['Красный', 'Серый', 'Синий']
    },
    {
        id: 3,
        image: chair2,
        category: 'Кресла',
        name: 'Кресло Orange',
        price: 12000,
        rating: 4.9,
        cardText: 'Система трансформации «Аккордеон» подходит для ежедневного использования. В разложенном виде кресло-кровать образует спальное место.',
        colors: ['Желтый', 'Черный', 'Красный']
    },
    {
        id: 4,
        image: sofa,
        promotion: 50,
        category: 'Диваны',
        name: 'Диван GreenStone',
        price: 16000,
        newPrice: 8000,
        rating: 4.9,
        cardText: 'Лаконичный и элегантный дизайн визуально не перегружает пространство, а пастельные тона обивки будут гармонично сочетаться с широкой гаммой других оттенков в интерьере.',
        colors: ['Желтый', 'Серый', 'Красный']
    }
] 

export const QUANTITY_CARD_ON_PAGE = 1;
