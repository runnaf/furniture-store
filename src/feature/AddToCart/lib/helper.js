export const getColorTitle = (color) => {
    switch (color) {
        case 'black':
            return 'Черный';
        case 'brown':
            return 'Коричневый';
        case 'grey':
            return 'Серый';
        case 'green':
            return 'Зеленый';
        case 'blue':
            return 'Синий';
        case 'white':
            return 'Белый';
        case 'yellow':
            return 'Желтый';
        default:
            return null;
    }
};

export const getColorForStyle = (color) => {
    switch (color) {
        case 'black':
            return '#242424';
        case 'brown':
            return '#622718';
        case 'grey':
            return '#D9D9D9';
        case 'green':
            return '#008263';
        case 'blue':
            return '#006F9E';
        case 'yellow':
            return '#FFBA35';
        case 'red':
                return '#F04646';
        case 'white':
            return '#FFF';       
        default:
            return null;
    }
};
