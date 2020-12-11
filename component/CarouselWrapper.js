import React from "react";
import VerticalCarousel from "./CarouselCustom";

const CarouselWrapper = ({ styles, data, heading }) => {
  return (
    <section className={styles.mainContentWrapper}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.content}>
        <VerticalCarousel data={data} styles={styles} />
      </div>
    </section>
  );
};

export default CarouselWrapper;
