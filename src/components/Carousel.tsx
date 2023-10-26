import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/carousel.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = images.slice(currentIndex, currentIndex + 3);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`${styles.carousel}  flex justify-around gap-3`}>
      <button onClick={goToPrevSlide} className={`${styles.btn}`}>
        &lt;
      </button>

      {imagesToShow.map((imageUrl, index) => (
        <Image
          key={index}
          src={`/${imageUrl}`}
          width={200}
          height={0}
          alt={`Slide ${index + 1}`}
        />
      ))}

      <button onClick={goToNextSlide} className={`${styles.btn}`}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
