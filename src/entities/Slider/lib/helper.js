export const slicerOfArray = (data, currentSlide, quantityCardsOnPage) => {
    const lastSliderOnPage = currentSlide + 1;

    console.log(data)

    const firstPage = currentSlide * quantityCardsOnPage;
    const lastPage = lastSliderOnPage * quantityCardsOnPage;
    
    const sliceArray = data.slice(firstPage,lastPage);
    
    return sliceArray
}
