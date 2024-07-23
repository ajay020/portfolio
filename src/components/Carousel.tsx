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
    <div className={`${styles.carousel} border flex justify-around gap-4`}>
      <button onClick={goToPrevSlide} className={`${styles.btn}`}>
        &lt;
      </button>

      <div className={`flex gap-2`}>
        {imagesToShow.map((imageUrl, index) => (
          <div className="p-4">
            <Image
              key={index}
              src={`/${imageUrl}`}
              width={120}
              height={100}
              alt={`image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button onClick={goToNextSlide} className={`${styles.btn}`}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
