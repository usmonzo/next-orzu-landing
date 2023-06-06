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
  // const [prevOpacity];

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest >= 66 && latest <= 430) {
      setCardsOpacity(1 - (latest - 66) / 365);
      console.log(cardsOpacity);
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
          <h1
            className={styles.header_title}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ delay: 0.1 }}
          >
            Выгодный кредит для <br />
            <span className={styles.text_gradient}>
              покупки бытовой техники
            </span>
          </h1>
          <p
            className={styles.header_paragraph}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ delay: 0.1 }}
          >
            Получите одобрение в течении дня и получайте деньги, не посещая офис
          </p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ delay: 0.1 }}
        >
          <PrimaryButton text="Получить кредит" />
          <span style={{ color: "#ff6200", fontSize: "0.75rem" }}>
            *Физическая карта отличается от изображения на сайте
          </span>
        </div>
        <div
          className={styles.header_icons_container}
          // initial={{ margin: 20, opacity: 0 }}
          // whileInView={{ margin: 0, opacity: 1 }}
          // transition={{ delay: 0.1 }}
        >
          <Image
            src={white}
            alt="2"
            width={1650}
            height={800}
            className={styles.header_icons}
            style={{ opacity: `${cardsOpacity}` }}
          />
          <Image
            src={black}
            alt="2"
            width={1650}
            height={800}
            className={styles.header_icons}
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
