import { BottomButton } from "../../../../entities/Slider/ui/BottomButtons/ui/BottomButton/BottomButton";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { getArray } from "./libs/helpers";
import styles from "./Pagination.module.scss";

export const Pagination = ({array, quantityPages, currentSlide, handleClickSlide, nextCard,  prevCard}) => {
  const pages = getArray(array.length, quantityPages);

  return (
      <Stack 
          align="alignCenter" 
          justify="justifyCenter" 
          className={styles.pagination} 
          gap="12"
      >
          <button 
              type="button" 
              disabled={currentSlide===0} 
              onClick={prevCard}
          >
              <VisuallyHidden>листать влево</VisuallyHidden>
          </button>
          <ul>
              {pages.map((page) => (
                  <BottomButton 
                      key={page}
                      page={page-1}
                      className={styles.page}
                      color='transparent'
                      currentSlide={currentSlide} 
                      handleClickSlide={handleClickSlide}
                  >{page}</BottomButton>
              ))}
          </ul>
          <button 
              type="button" 
              disabled={currentSlide===pages.length - 1} 
              onClick={nextCard}
          >
              <VisuallyHidden>листать вправо</VisuallyHidden>
          </button>
      </Stack>
  );
};
