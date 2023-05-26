"use client";

import white from "../../../public/assets/whiteCard.webp";
import black from "../../../public/assets/blackCard.webp";
import PrimaryButton from "../Buttons/PrimaryButton";

import styles from "./Header.module.scss";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import HeaderContent from "../HeaderContent/HeaderContent";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <header className={styles.header_container}>
        <motion.h1
          className={styles.header_title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Выгодный кредит для <br />
          <span className={styles.text_gradient}>покупки бытовой техники</span>
        </motion.h1>
        <motion.p
          className={styles.header_paragraph}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Получите одобрение в течении дня и получайте деньги, не посещая офис
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <PrimaryButton text="Получить кредит" />
        </motion.div>
        <motion.div
          className={styles.header_icons_container}
          initial={{ margin: 20, opacity: 0 }}
          whileInView={{ margin: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={white}
            alt="2"
            width={1650}
            height={800}
            className={styles.header_icons}
          />
          <Image
            src={black}
            alt="2"
            width={1650}
            height={800}
            className={styles.header_icons}
          />
        </motion.div>
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
