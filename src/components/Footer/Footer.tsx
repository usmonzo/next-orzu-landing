import styles from "./Footer.module.scss";
import whiteLogo from "../../../public/assets/whiteLogo.svg";
import inst from "../../../public/assets/inst.svg";
import telegram from "../../../public/assets/telegram.svg";
import vk from "../../../public/assets/vk.svg";
import facebook from "../../../public/assets/facebook.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_horizontal}>
        <Image
          src={whiteLogo}
          alt={"logo"}
          className={styles.footer_logo_icon}
        />
        <div className={styles.footer_social_networks}>
          <Image
            src={inst}
            alt={"inst"}
            className={styles.social_networks_icon}
          />
          <Image
            src={telegram}
            alt={"telegram"}
            className={styles.social_networks_icon}
          />
          <Image src={vk} alt={"vk"} className={styles.social_networks_icon} />
          <Image
            src={facebook}
            alt={"facebook"}
            className={styles.social_networks_icon}
          />
        </div>
      </div>
      <hr className={styles.footer_hr} />
      <div className={styles.footer_links_container}>
        <div className={styles.footer_number_container}>
          <h2>+992 (44) 640 55 44</h2>
          <p>Горячая линия Хумо</p>
        </div>
        <div className={styles.footer_links_content}>
          <a>Хумо</a>
          <a>Хумо Онлайн</a>
          <a>Хумо переводы</a>
          <a>Депозит — Сарчашма</a>
          <a>Карты Visa</a>
          <a>Часто задаваемые вопросы</a>
        </div>
      </div>
      <div className={styles.footer_description_container}>
        <div className={styles.footer_humo_organization}>
          Прогрессивная и одна из лидирующих микрофинансовых организаций в
          Таджикистане, предоставляющая банковские услуги более 100 тысячам
          клиентов. 734061, г. Душанбе, ул. Н. Карабаева, 148/1. Тел.: 544
        </div>
        <div className={styles.footer_humo_license}>
          © 2022 ЗАО МДО «Хумо» Лицензия НБТ №0000077 от 24 мая 2017 г.
        </div>
      </div>
    </div>
  );
};
