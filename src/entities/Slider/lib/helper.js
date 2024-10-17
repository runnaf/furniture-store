export const slicerOfArray = (data, currentSlide, quontityCardsOnPage) => {
    const lastSlideronPAge = currentSlide + 1;

    const firstPage = currentSlide * quontityCardsOnPage;
    const lastPage = lastSlideronPAge * quontityCardsOnPage;
    
    const sliceArray = data.slice(firstPage,lastPage);
    
    return sliceArray
}
