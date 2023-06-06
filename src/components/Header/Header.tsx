"use client";

import white from "../../../public/assets/whiteCard.webp";
import black from "../../../public/assets/blackCard.webp";
import PrimaryButton from "../Buttons/PrimaryButton";

import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderContent from "../HeaderContent/HeaderContent";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  // const scrollRef = useRef(null);
  const [cardsOpacity, setCardsOpacity] = useState(1);
  const [cardTranslation, setCardTranslate] = useState({
    x: 0,
    y: 0,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest >= 166 && latest <= 630) {
      // 1 is start opacity point
      // 66 animation start
      // 430 end of animation
      // 365 one tick of scroll
      setCardsOpacity(1 - (latest - 166) / 465);
      setCardTranslate({
        x: -(((latest - 166) * 100) / 465),
        y: -(((latest - 166) * 100) / 465),
      });
    } else if (latest > 630) {
      setCardTranslate({
        x: -100,
        y: -100,
      });
      setCardsOpacity(0);
    } else if (latest < 166) {
      setCardsOpacity(1);
      setCardTranslate({
        x: 0,
        y: 0,
      });
    }
  });
  return (
    <>
      <header className={styles.header_container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            padding: "0 20px",
          }}
        >
          <h1 className={styles.header_title}>
            Выгодный кредит для <br />
            <span className={styles.text_gradient}>
              покупки бытовой техники
            </span>
          </h1>
          <p className={styles.header_paragraph}>
            Получите одобрение в течении дня и получайте деньги, не посещая офис
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <PrimaryButton text="Получить кредит" />
          <span style={{ color: "#ff6200", fontSize: "0.75rem" }}>
            *Физическая карта отличается от изображения на сайте
          </span>
        </div>
        <div className={styles.header_icons_container}>
          <Image
            src={white}
            alt="2"
            width={1650}
            height={800}
            className={styles.header_icons}
            style={{
              opacity: `${cardsOpacity}`,
              transform: `translate3d(${cardTranslation.x}%, ${cardTranslation.y}%,0)`,
              // transition: "all 0.1s linear",
            }}
          />
          <Image
            src={black}
            alt="2"
            width={1650}
            height={800}
            className={styles.header_icons}
            style={{
              opacity: `${cardsOpacity}`,
              transform: `translate3d(${-cardTranslation.x}%, ${-cardTranslation.y}%,0)`,
              // transition: "all 0.1s linear",
            }}
          />
        </div>
      </header>
      <section className={styles.header_content_section}>
        <div className={styles.header_content_color}>
          <HeaderContent />
        </div>
      </section>
    </>
  );
};

export default Header;
