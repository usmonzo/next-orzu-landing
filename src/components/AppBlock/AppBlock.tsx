import Image from "next/image";
import styles from "./AppBlock.module.scss";
import gglplay from "../../../public/assets/ggl.svg";
import appstore from "../../../public/assets/appstr.svg";
import appgallery from "../../../public/assets/appgalery.svg";
import elipsis from "../../../public/assets/ellipse.svg";
import qrCode from "../../../public/assets/qrCode.svg";
import orzuTheme from "../../../public/assets/orzuTheme2.svg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

export const AppBlock = () => {
  const [onView, setOnView] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.76) {
      setOnView(true);
    }
  });

  return (
    <div className={styles.app_color_block}>
      <div className={styles.app_text_container}>
        <Image src={elipsis} alt="elipse" className={styles.block_elipse_img} />
        <h1 className={styles.app_headline}>
          Используйте Орзу в <br />
          Хумо Онлайн
        </h1>
        <article className={styles.block_btns}>
          <a href="https://play.google.com/store/apps/details?id=tj.humo.online">
            <Image
              src={gglplay}
              className={styles.block_btn_btn}
              alt="ggl"
              loading="lazy"
            />
          </a>
          <a href="https://apps.apple.com/ru/app/humo-online/id1242252363">
            <Image
              src={appstore}
              className={styles.block_btn_btn}
              alt="ggl"
              loading="lazy"
            />
          </a>
          <a href="https://apps.apple.com/ru/app/humo-online/id1242252363">
            <Image
              src={appgallery}
              className={styles.block_btn_btn}
              alt="ggl"
              loading="lazy"
            />
          </a>
        </article>
        <div className={styles.block_qr_code}>
          <Image src={qrCode} alt="qr" />
          <p>Наведите камеру и скачайте бесплатное приложение Хумо Онлайн</p>
        </div>
      </div>
      <motion.div
        className={styles.block_orzu_theme}
        initial={{ translateX: 200, translateY: 100 }}
        animate={onView ? { translateX: 0, translateY: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image src={orzuTheme} alt="orzu" />
      </motion.div>
    </div>
  );
};
