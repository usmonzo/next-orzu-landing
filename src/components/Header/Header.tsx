"use client";

import white from "../../../public/assets/whiteCard.webp";
import black from "../../../public/assets/blackCard.webp";
import PrimaryButton from "../Buttons/PrimaryButton";

import styles from "./Header.module.scss";
import Image from "next/image";
import HeaderContent from "../HeaderContent/HeaderContent";
import {
  motion,
  motionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";

const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [166, 630],
    // Into these values:
    [1, 0]
  );
  const cardsTranslate = useTransform(scrollY, [166, 630], ["0%", "100%"]);
  const whiteCardTranslate = useTransform(scrollY, [166, 630], ["0%", "-100%"]);
  const backgroundColor = useTransform(
    scrollY,
    [1600, 2000],
    ["#fff", "#16191d"]
  );

  return (
    <>
      <header className={styles.header_container}>
        <Navbar />
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
          <motion.div
            className={styles.transition_cards}
            style={{
              opacity,
              translateX: whiteCardTranslate,
              translateY: whiteCardTranslate,
            }}
          >
            <Image
              src={white}
              alt="2"
              width={1650}
              height={800}
              className={styles.header_icons}
            />
          </motion.div>
          <motion.div
            className={styles.transition_cards}
            style={{
              opacity,
              translateX: cardsTranslate,
              translateY: cardsTranslate,
            }}
          >
            <Image
              src={black}
              alt="2"
              width={1650}
              height={800}
              className={styles.header_icons}
            />
          </motion.div>
        </div>
      </header>
      <motion.section
        className={styles.header_content_section}
        style={{ backgroundColor }}
      >
        <div className={styles.header_content_color}>
          <HeaderContent />
        </div>
      </motion.section>
    </>
  );
};

export default Header;
