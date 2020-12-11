import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Slide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    //slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MultiCarousel = (props) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={20000}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className={styles.slide_1}>
        <div>
          <h3>Laboratory Programs</h3>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
            ligula.
          </p>
          <FontAwesomeIcon
            icon={faBookmark}
            className={styles.bookmark}
            size="3x"
          />
        </div>
      </div>
      <div className={styles.slide_2}>
        <div>
          <h3>Games</h3>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
            ligula.
          </p>
          <FontAwesomeIcon
            icon={faBookmark}
            className={styles.bookmark}
            size="3x"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default MultiCarousel;
