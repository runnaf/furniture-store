import { Link } from "react-router-dom";
import { getRouteCategories, getRouteShop } from "../../../../app/routes/lib/helper";
import { Button } from "../../../../shared/ui/Button/Button";
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { TitleSecondary } from "../TitleSecondary/TitleSecondary";
import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { card, QUONTITY_CARD_ON_PAGE } from "../../lib/data";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { SlideRooms } from "../SlideRooms/SlideRooms";
import styles from "./Preview.module.scss";

export const Preview = () => {
    const { currentSlide, nextCard,  prevCard } = useSlider(card.length);
    const rooms = slicerOfArray(card, currentSlide, QUONTITY_CARD_ON_PAGE);
    console.log(currentSlide)
    
    return (
        <section className={ styles.previewContainer }>
            <Stack direction = {'column'} gap={'24'}>
                <TitleSecondary />
                <HeaderSection className={styles.header} isLine = { false }>Изучите Нашу <span>Коллекцию Cовременной Мебели</span></HeaderSection>
                <Text className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </Text>
                <Stack align= {'alignCenter'} gap={'24'}>
                    <Button className={styles.linkShop} isButton={false} linkHref={getRouteShop()}>За Покупками</Button>
                    <Link className={styles.linkCategory} to={getRouteCategories()}>Просмотреть категории товаров</Link>
                </Stack>
                <Stack className={styles.description} direction={'column'} gap={'16'}>
                    <Text type={"h3"}>Рейтинг магазина 4.9</Text>
                    <Text >Нам доверяют более 50 тысяч клиентов</Text>
                </Stack>
            </Stack>
            <Slider isSideButtons = {true} 
                isBottomButtons = {false} 
                quontityCardsOnPage = { QUONTITY_CARD_ON_PAGE } 
                className = {styles.slider} 
                data = {card} 
                currentSlide = {currentSlide} 
                nextCard = { nextCard } 
                prevCard = { prevCard }
                gap={'24'}
            >
                <SlideRooms rooms = {rooms} />
            </Slider>
            
        </section>
    )
} 