import brown from '../../../shared/assets/svg/brown.svg';
import grey from '../../../shared/assets/svg/grey.svg';
import black from '../../../shared/assets/svg/black.svg';
import green from '../../../shared/assets/svg/green.svg';
import red from '../../../shared/assets/svg/red.svg';
import orange from '../../../shared/assets/svg/orange.svg';
import blue from '../../../shared/assets/svg/blue.svg';
import white from '../../../shared/assets/svg/white.svg';

export const filtersData = {
    category: {
        title: 'Категория',
        items: [
        { value: 'bedroom', label: 'Спальня' },
        { value: 'livingRoom', label: 'Гостиная' },
        { value: 'office', label: 'Офис' },
        { value: 'lighting', label: 'Освещение' },
        { value: 'kitchen', label: 'Кухня' },
        { value: 'outdoor', label: 'Для улицы' },
        { value: 'decor', label: 'Декор' }
        ]
    },
    color: {
        title: 'Цвет',
        items: [
        { value: 'brown', label: 'Коричневый', image: brown},
        { value: 'grey', label: 'Серый', image: grey },
        { value: 'black', label: 'Черный', image: black },
        { value: 'green', label: 'Зеленый', image: green },
        { value: 'red', label: 'Красный', image: red },
        { value: 'orange', label: 'Оранжевый', image: orange },
        { value: 'blue', label: 'Синий', image: blue },
        { value: 'white', label: 'Белый', image: white }
        ]
    },
    material: {
        title: 'Материал',
        items: [
        { value: 'metal', label: 'Металл' },
        { value: 'wood', label: 'Дерево' },
        { value: 'upholstered', label: 'С мягкой обивкой' },
        { value: 'glass', label: 'Стекло' },
        { value: 'plastic', label: 'Пластик' }
        ]
    },
    availability: {
        title: 'Доступность',
        items: [
        { value: 'inStock', label: 'В наличии' },
        { value: 'outOfStock', label: 'Под заказ' }
        ]
    },
}
