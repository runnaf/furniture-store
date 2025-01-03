import { useMemo } from "react";
import { getRouteProduct } from "../../../../app/routes/lib/helper"
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import { ArrowIcon } from '../../../Slider/ui/ArrowIcon/ArrowIcon';
import star from '../../../../shared/assets/svg/star.svg';
import { getStyles } from "../../../../shared/libs/getStyles";
import styles from './CardInfo.module.scss'


export const CardInfo = ({
    id,
    view,
    sub_categories,
    rating,
    name,
    price,
    sale_price,
    description,
}) => {

    const combinedText = useMemo(() => {
        if (!description?.paragraphs) return '';
        const combined = description.paragraphs.join(' ')
        return combined.length > 200 ? `${combined.slice(0, 200)}...` : combined;
    }, [description])


    const categoryView = getStyles(view === 'extended' 
    ? styles.extendedCategory 
    : '', {}, [styles.categoryBase]
)
    return(
        <Stack 
        gap='4' 
        direction='column' 
        className={categoryView}
    >
        <Stack 
            align='alignCenter'
            justify='justifyBetween'
            className={styles.categoryContainer}
        >
            <Text className={styles.category}>
                {sub_categories}
            </Text>
            <Stack 
                gap='8' 
                align='alignCenter'
                className={styles.ratingContainer}
            >
                <img src={star} alt='star' className={styles.star} />
                <Text className={styles.rating}>{rating}</Text>
            </Stack>
        </Stack>
        <Stack 
            gap='12'
            direction='column'
            className={styles.textContainer}
        >
            <Text type='h3'>{name}</Text >
            <Stack 
                gap='16'
                direction={view === 'extended' ? 'column' : 'row'} 
                justify={view === 'extended' ? 'start' : 'justifyBetween'}
            >
                <Stack
                    align="alignCenter"
                    gap='12'
                    className={styles.priceContainer}
                >
                    {sale_price &&
                        <Text>
                            {price.toLocaleString("ru-RU")}₽
                        </Text>
                    }
                    <Text>{price.toLocaleString("ru-RU")}₽</Text>
                </Stack>
                {view === 'extended' && 
                    <Text className={styles.cardText}>
                        {combinedText}
                    </Text>
                }
                {view === 'general' && 
                    <LinkCustom 
                        to={getRouteProduct(id)}
                        color='transparent'
                    >
                        <ArrowIcon/>
                    </LinkCustom>
                }
            </Stack>
        </Stack>
    </Stack>  
    )
}