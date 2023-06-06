import BlackButton from "../Buttons/BlackButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import styles from "./HeaderContent.module.scss";
import Image from "next/image";
import timer from "../../../public/assets/timer.svg";
import { Spinner } from "@chakra-ui/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function HeaderContent() {
  return (
    <>
      <div
        style={{ overflow: "scroll" }}
        className={styles.header_main_content}
      >
        <div className={styles.main_content_horizontal}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // whileHover={{ scale: 0.98 }}
            className={styles.orange_box}
          >
            <h2 className={styles.orange_box_text}>
              Получите кредит наличными почти сразу
            </h2>
            <BlackButton text={"Получить кредит"} />
          </motion.div>
          <div
            // whileHover={{ scale: 0.98 }}

            className={styles.white_box}
          >
            <h2 className={styles.white_box_headline}>5 лет</h2>
            <div className={styles.wh}>
              <p className={styles.white_box_secondary}>
                Единоразовое подключение
              </p>
              <p className={styles.white_box_paragraph}>
                Получайте деньги, не посещая офис, в течение 5 лет
              </p>
            </div>
            <PrimaryButton
              text="Подробнее"
              aligned="flex-start"
              justify="end"
            />
          </div>
        </div>
        <h1 className={styles.header_main_content_headline}>
          Пользуйтесь где угодно и когда угодно
        </h1>
        <div className={styles.main_content_horizontal}>
          <div className={styles.white_box_timer}>
            <div style={{ zIndex: 5 }}>
              <span
                style={{
                  fontSize: "24px",
                  marginBottom: "20px",
                  color: "#ff6200",
                }}
                className={styles.white_box_timer_span}
              >
                Срок кредита
              </span>
              <p className={styles.white_box_timer_headline}>
                От 15 дней <br /> до 3 лет
              </p>
            </div>
            <PrimaryButton text="Подробнее" aligned="flex-start" />
            <Image
              src={timer}
              alt={"timer"}
              className={styles.white_box_timer_icon}
            />
          </div>
          <div className={styles.blue_box}>
            <h2 className={styles.blue_box_text} style={{ fontWeight: "900" }}>
              Кредит <br />
              до
              <br /> 50 000 сомони
            </h2>
            <BlackButton text="Получить кредит" />
          </div>
        </div>
      </div>
    </>
  );
}
