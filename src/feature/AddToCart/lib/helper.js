export const getColorTitle = (color) => {
    switch (color) {
        case '#242424':
            return 'черный';
        case '#622718':
            return 'коричневый';
        case 'rgba(36, 36, 36, 0.1)':
            return 'серый';
        case '#008263':
            return 'зеленый';
        case '#006F9E':
            return 'синий';
        default:
            return null;
    }
};
