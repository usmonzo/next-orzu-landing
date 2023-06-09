import Image from "next/image";
import styles from "./AppBlock.module.scss";
import gglplay from "../../../public/assets/ggl.svg";
import appstore from "../../../public/assets/appstr.svg";
import appgallery from "../../../public/assets/appgalery.svg";
import elipsis from "../../../public/assets/ellipse.svg";
import qrCode from "../../../public/assets/qrCode.svg";
import orzuTheme from "../../../public/assets/orzuTheme2.svg";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

export const AppBlock = () => {
  const { scrollYProgress } = useScroll();
  const orzuTranslate = useTransform(scrollYProgress, [0.8, 0.82], [600, 0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
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
        style={{
          translateX: orzuTranslate,
          translateY: orzuTranslate,
        }}
      >
        <Image
          src={orzuTheme}
          // width={1096}
          // height={636}
          alt="orzu"
        />
      </motion.div>
    </div>
  );
};
