export const getColorTitle = (color) => {
    switch (color) {
        case '#242424':
            return 'Черный';
        case '#622718':
            return 'Коричневый';
        case '#D9D9D9':
            return 'Серый';
        case '#008263':
            return 'Зеленый';
        case '#006F9E':
            return 'Синий';
        default:
            return null;
    }
};

export const getColorForStyle = (color) => {
    switch (color) {
        case 'Черный':
            return '#242424';
        case 'Коричневый':
            return '#622718';
        case 'Серый':
            return '#D9D9D9';
        case 'Зеленый':
            return '#008263';
        case 'Синий':
            return '#006F9E';
        case 'Желтый':
            return '#FFBA35';
        case 'Красный':
                return '#F04646';
        default:
            return null;
    }
};
