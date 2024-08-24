export const getStyles = (styles, mode, additional) => {
    const modStyles = Object.entries(mode)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key)

    return [styles, ...modStyles, ...additional].join(' ');
}