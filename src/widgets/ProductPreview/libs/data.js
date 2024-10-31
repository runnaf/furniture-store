import bed from "../../../shared/assets/jpg/bed.jpg";
import chair from "../../../shared/assets/jpg/chair.jpg";
import sofaChair from "../../../shared/assets/jpg/sofa-chair.jpg";
import sofa from "../../../shared/assets/jpg/sofa.jpg";

export const data = {
    categories:'Кресло', 
    title:"Красное игровое кресло", 
    rating: 4.9, 
    inStock: true, 
    review: 250, 
    price: 4500, 
    oldPrice: 5000, 
    description: "Погрузитесь в мир комфорта и стиля с нашим Красным Игровым Креслом, который идеально подходит как для геймеров, так и для длительной работы за компьютером. Его эргономичный дизайн обеспечивает надежную поддержку позвоночника, позволяя вам долго оставаться в удобном положении без усталости.", 
    colors:['#242424', '#622718', 'rgba(36, 36, 36, 0.1)', '#008263', '#006F9E'], 
    sku: 'FRNC87654ABC', 
    tags: ['Офис','Кресло', 'Игровое кресло']
}

export const goods = [
    {
        id:0,
        good: bed,
    },
    {
        id:1,
        good: chair,
    },
    {
        id:2,
        good: sofaChair,
    },
    {
        id:3,
        good: sofa,
    },
]

export const QUANTITY_CARD_ON_PAGE = 1;
