import { useState } from "react";
import { DescriptionOfProduct } from "../DescriptionOfProduct/DescriptionOfProduct";
import { SliderOfProduct } from "../SliderOfProduct/SliderOfProduct";
import styles from "./ProductPreview.module.scss";

export const ProductPreview = ({ data }) => {
  const [currentColor, setCurrentColor] = useState(data.color[0].value ?? '');
  const handleSelectColor = (color) => {
    setCurrentColor(color);
}

  return (
      <section className={styles.container}>
        <SliderOfProduct 
          data={data} 
          currentColor={currentColor} 
        />
        <DescriptionOfProduct 
          product={data} 
          handleSelectColor={handleSelectColor}
          currentColor={currentColor}
        />
      </section>
  )
}