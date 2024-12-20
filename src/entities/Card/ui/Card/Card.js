import { Stack } from '../../../../shared/ui/Stack/Stack';
import { CardInfo } from '../CardInfo/CardInfo';
import { getStyles } from '../../../../shared/libs/getStyles';
import { CardImage } from '../CardImage/CardImage';
import styles from './Card.module.scss';

export const Card = ({ 
    id, color, rating, promotion,
    sub_categories, name, 
    price, sale_price, timer,
    description,
    view = 'general',// general | extended
}) => {

    console.log(id, color)

    const firstImage = color[0]?.images?.[2] || {};

    return (
        <Stack 
            direction={view === 'extended' ? 'row' : 'column'} 
            gap='16' 
            className={styles.mainContainer}
        >
            <CardImage
                view={view}
                firstImage={firstImage}
                promotion={promotion}
                timer={timer}
            />

            <CardInfo
                id={id}
                view={view}
                sub_categories={sub_categories}
                rating={rating}
                name={name}
                price={price}
                sale_price={sale_price}
                description={description}
            />
        </Stack>
    );
};
