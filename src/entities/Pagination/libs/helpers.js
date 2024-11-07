export const getArray = (lengthArray, quantityPages) => {
    const quantity = Math.ceil(lengthArray/quantityPages)
    
    return Array.from({length: quantity}, (_, i) => i + 1)
}
