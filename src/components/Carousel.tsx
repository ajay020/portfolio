import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated, useScroll } from "react-spring";

import styles from "../styles/carousel.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = images.slice(currentIndex, currentIndex + 3);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : images.length - 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <div className={`${styles.carousel}  flex justify-around gap-3`}>
      <button onClick={goToPrevSlide} className={`${styles.btn}`}>
        &lt;
      </button>
      <div className={styles.slideContainer}>
        {imagesToShow.map((imageUrl, index) => (
          <Image
            key={index}
            src={`/${imageUrl}`}
            width={180}
            height={200}
            alt={`image ${index + 1}`}
          />
        ))}
      </div>

      <button onClick={goToNextSlide} className={`${styles.btn}`}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
