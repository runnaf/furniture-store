export const getValueOption = (value) => {
    switch (value) {
        case 'newest':
            return 'от новых';
        case 'oldest':
            return 'от старых';
        case 'highest':
            return 'от высокого рейтинга';
        case 'lowest':
            return 'от низкого рейтинга';
        default:
            return null;
    }
};
