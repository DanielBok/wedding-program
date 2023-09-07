import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Image, Progress } from "antd";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Female1 from "./images/Female1.png";
import Female2 from "./images/Female2.jpg";
import Male1 from "./images/Male1.jpg";
import Male2 from "./images/Male2.jpg";
import Male3 from "./images/Male3.jpg";
import Male4 from "./images/Male4.jpg";
import Male5 from "./images/Male5.jpg";
import Male6 from "./images/Male6.jpg";
import Male7 from "./images/Male7.jpg";
import styles from "./styles.module.css";

const images = [
  Female1,
  Female2,
  Male1,
  Male2,
  Male3,
  Male4,
  Male5,
  Male6,
  Male7,
];

const ImageGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [percent, setPercent] = useState(0);
  const setPercentageDebounced = useCallback((v: Parameters<typeof setPercent>[0]) => debounce(setPercent, 250)(v), []);

  const scrollLeft = scrollFactory("left");
  const scrollRight = scrollFactory("right");

  useEffect(() => {
    if (sectionRef.current) {
      const {scrollWidth, offsetWidth, scrollLeft} = sectionRef.current;
      setPercent(calcPercentage(scrollWidth, offsetWidth, scrollLeft));
    }
  }, []);

  return (
    <div className={styles.imageGallery}>
      <section ref={sectionRef} onScroll={onScroll}>
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            height={250}
          />
        ))}
      </section>
      <div className={styles.buttonRow}>
        <Button
          type="primary"
          className={styles.button}
          icon={<LeftOutlined/>}
          onClick={scrollLeft}
        />
        <Progress
          percent={percent}
          strokeColor={{"0%": "#108ee9", "100%": "#87d068"}}
          showInfo={false}
          className={styles.progressBar}
        />
        <Button
          type="primary"
          className={styles.button}
          icon={<RightOutlined/>}
          onClick={scrollRight}
        />
      </div>
    </div>
  );

  function scrollFactory(direction: "left" | "right") {
    return function scroll() {
      if (!sectionRef.current) {
        return;
      }

      const {scrollWidth, offsetWidth, scrollLeft} = sectionRef.current;
      const newX = Math.round(
        direction === "left"
          ? Math.max(0, scrollLeft - 150)
          : Math.min(scrollWidth, scrollLeft + 150));

      // percentage seen
      setPercent(calcPercentage(scrollWidth, offsetWidth, newX));
      sectionRef.current.scroll(newX, 0);
    };
  }

  function onScroll() {
    if (!sectionRef.current) {
      return;
    }
    const {scrollWidth, offsetWidth, scrollLeft} = sectionRef.current;
    setPercentageDebounced(calcPercentage(scrollWidth, offsetWidth, scrollLeft));
  }

  function calcPercentage(scrollWidth: number, offsetWidth: number, scrollLeft: number) {
    return (scrollLeft + offsetWidth) / scrollWidth * 100;
  }
};

export default ImageGallery;