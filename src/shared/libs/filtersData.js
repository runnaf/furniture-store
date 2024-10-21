import brown from '../assets/svg/brown.svg';
import grey from '../assets/svg/grey.svg';
import black from '../assets/svg/black.svg';
import green from '../assets/svg/green.svg';
import red from '../assets/svg/red.svg';
import orange from '../assets/svg/orange.svg';
import blue from '../assets/svg/blue.svg';
import white from '../assets/svg/white.svg';

const filtersData = {
    category: [
        { value: 'bedroom', label: 'Спальня' },
        { value: 'livingRoom', label: 'Гостиная' },
        { value: 'office', label: 'Офис' },
        { value: 'lighting', label: 'Освещение' },
        { value: 'kitchen', label: 'Кухня' },
        { value: 'outdoor', label: 'Для улицы' },
        { value: 'decor', label: 'Декор' }
    ],
    color: [
        { value: 'brown', label: 'Коричневый', image: brown},
        { value: 'grey', label: 'Серый', image: grey },
        { value: 'black', label: 'Черный', image: black },
        { value: 'green', label: 'Зеленый', image: green },
        { value: 'red', label: 'Красный', image: red },
        { value: 'orange', label: 'Оранжевый', image: orange },
        { value: 'blue', label: 'Синий', image: blue },
        { value: 'white', label: 'Белый', image: white }
    ],
    material: [
        { value: 'metal', label: 'Металл' },
        { value: 'wood', label: 'Дерево' },
        { value: 'upholstered', label: 'С мягкой обивкой' },
        { value: 'glass', label: 'Стекло' },
        { value: 'plastic', label: 'Пластик' }
    ],
    availability: [
        { value: 'inStock', label: 'В наличии' },
        { value: 'outOfStock', label: 'Нет в наличии' }
    ]
};

export default filtersData;