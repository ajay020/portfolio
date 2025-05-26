import React, { useState } from "react";
import Image from "next/image";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = images.slice(currentIndex, currentIndex + 3);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 <= images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <div className={`${styles.carousel} flex items-center justify-center gap-4`}>
      <button
        onClick={goToPrevSlide}
        disabled={currentIndex === 0}
        className={`${styles.btn} text-xl p-2 hover:text-blue-600 transition`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="flex gap-2">
        {imagesToShow.map((imageUrl, index) => (
          <div key={index} className="p-2 border rounded">
            <Image
              src={`/${imageUrl}`}
              width={140}
              height={100}
              alt={`Screenshot ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToNextSlide}
        disabled={currentIndex + 3 >= images.length}
        className={`${styles.btn} text-xl p-2 hover:text-blue-600 transition`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
export default Carousel;
