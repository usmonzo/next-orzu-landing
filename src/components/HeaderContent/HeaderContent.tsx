import BlackButton from "../Buttons/BlackButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import styles from "./HeaderContent.module.scss";
import Image from "next/image";
import timer from "../../../public/assets/timer.svg";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useState } from "react";

export default function HeaderContent() {
  const { scrollY } = useScroll();
  const [orangeContainerTranslate, setOrangeContainerTranslate] = useState(0);
  const [grayContainerTranslate, setGrayContainerTranslate] = useState(0);
  const [headlineTranslate, setHeadlineTranslate] = useState(780);
  const [headlineBlur, setHeadlineBlur] = useState(4);
  const [headlineOpacity, setHeadlineOpacity] = useState(1);
  const [timerContainerTranslate, setTimerContainerTranslate] = useState(0);
  const [blueContainerTranslate, setBlueContainerTranslate] = useState(0);
  useMotionValueEvent(
    scrollY,
    "change",
    useCallback((latest) => {
      if (latest >= 200 && latest <= 480) {
        setOrangeContainerTranslate(((latest - 200) * 500) / 280);
        console.log(orangeContainerTranslate);
      } else if (latest > 480) {
        setOrangeContainerTranslate(500);
      } else if (latest < 200) {
        setOrangeContainerTranslate(0);
      }
      if (latest >= 350 && latest <= 480) {
        setGrayContainerTranslate(((latest - 350) * 500) / 130);
        console.log(orangeContainerTranslate);
      } else if (latest > 480) {
        setGrayContainerTranslate(500);
      } else if (latest < 350) {
        setGrayContainerTranslate(0);
      }

      if (latest >= 480 && latest <= 860) {
        setHeadlineTranslate(780 - ((latest - 480) * 280) / 380);
        setHeadlineBlur(4 - ((latest - 480) * 4) / 380);
      } else if (latest >= 860 && latest <= 1200) {
        setHeadlineTranslate(500 - ((latest - 860) * 500) / 340);
        setHeadlineBlur(((latest - 860) * 4) / 340);
        setHeadlineOpacity(1 - (latest - 860) / 340);
      }

      // else if (latest > 860) {
      //   setHeadlineTranslate(500);
      // }
      // else if (latest < 480) {
      //   setHeadlineTranslate(0);
      // }
      if (latest >= 700 && latest <= 1000) {
        setTimerContainerTranslate(((latest - 700) * 550) / 300);
      } else if (latest > 1000) {
        setTimerContainerTranslate(550);
      } else if (latest < 700) {
        setTimerContainerTranslate(0);
      }
      if (latest >= 850 && latest <= 1000) {
        setBlueContainerTranslate(((latest - 850) * 550) / 150);
      } else if (latest > 1000) {
        setBlueContainerTranslate(550);
      } else if (latest < 850) {
        setBlueContainerTranslate(0);
      }
    }, [])
  );
  return (
    <>
      <div className={styles.header_main_content}>
        <div className={styles.main_content_horizontal}>
          <div
            className={styles.orange_box}
            style={{
              // transition: "all 0.1s linear",
              transform: `translate3d(0px,${-orangeContainerTranslate}px,0px)`,
            }}
          >
            <h2 className={styles.orange_box_text}>
              Получите кредит наличными почти сразу
            </h2>
            <BlackButton text={"Получить кредит"} />
          </div>
          <div
            className={styles.white_box}
            style={{
              transform: `translate3d(0px,${-grayContainerTranslate}px,0px)`,
            }}
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
        <h1
          className={styles.header_main_content_headline}
          style={{
            transform: `translate(0px,${-headlineTranslate}px)`,
            filter: `blur(${headlineBlur.toFixed(3)}px)`,
            opacity: `${headlineOpacity}`,
          }}
        >
          Пользуйтесь где угодно и когда угодно
        </h1>
        <div className={styles.main_content_horizontal}>
          <div
            className={styles.white_box_timer}
            style={{
              transform: `translate(0px,${-timerContainerTranslate}px)`,
            }}
          >
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
          <div
            className={styles.blue_box}
            style={{
              transform: `translate(0px,${-blueContainerTranslate}px)`,
            }}
          >
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
