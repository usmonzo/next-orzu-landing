"use client";
import "./Merchants.scss";
import WhiteButton from "../Buttons/WhiteButton";
import MerchBox from "../UI/MerchBox";
import tech from "../../../public/assets/printer.svg";
import phone from "../../../public/assets/mobile.svg";
import clothes from "../../../public/assets/Group.svg";
import couch from "../../../public/assets/mdi_sofa-single.svg";
import comp from "../../../public/assets/monitor.svg";
import ring from "../../../public/assets/icon-park-solid_diamond-ring.svg";
import food from "../../../public/assets/fluent_food-apple-24-filled.svg";
import parfum from "../../../public/assets/solar_perfume-bold.svg";
import halmet from "../../../public/assets/mdi_helmet.svg";
import tea from "../../../public/assets/coffee.svg";
import gift from "../../../public/assets/gift.svg";
import medicine from "../../../public/assets/solar_document-medicine-bold.svg";
import azs from "../../../public/assets/gas-station.svg";
import education from "../../../public/assets/book.svg";
import child from "../../../public/assets/mdi_children-toy.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Merchants = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [1600, 2000],
    ["#fff", "#16191d"]
  );
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const headlineOpacity = useTransform(scrollY, [1800, 1950, 2500], [0, 1, 0]);
  const headlineScale = useTransform(scrollY, [1800, 2600], [1, 2]);

  return (
    <motion.section style={{ backgroundColor }}>
      <div className="merch-container">
        <div>
          <motion.h1
            className="merch-headline"
            style={{ opacity: headlineOpacity, scale: headlineScale }}
          >
            Где же оплатить?
          </motion.h1>
        </div>
        <h1 className="merch-paragraph">
          {/*Выберите категорию для того, чтобы посмотреть список магазинов*/}
          Категории партнеров
        </h1>
        <motion.div
          className="merch-list"
          variants={container}
          initial="hidden"
          // animate="visible"
          whileInView="visible"
        >
          <MerchBox text="Бытовая техника">
            <Image
              src={tech}
              width={120}
              height={123}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Телефоны и аксессуары">
            <Image
              src={phone}
              width={106}
              height={133}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Одежда и обувь">
            <Image
              src={clothes}
              width={141}
              height={120}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Мебель и товары для дома">
            <Image
              src={couch}
              width={133}
              height={106}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Компьютеры и оргтехника">
            <Image
              src={comp}
              width={133}
              height={133}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Ювелирные изделия">
            <Image
              src={ring}
              width={112}
              height={146}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Продукты">
            <Image
              src={food}
              width={118}
              height={134}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Парфюмерия и косметика">
            <Image
              src={parfum}
              width={132}
              height={126}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Стройматериалы">
            <Image
              src={halmet}
              width={132}
              height={80}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Кафе и рестораны">
            <Image
              src={tea}
              width={131}
              height={134}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Цветы и подарки">
            <Image
              src={gift}
              width={126}
              height={134}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Медицинские услуги и лекарства">
            <Image
              src={medicine}
              width={120}
              height={134}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="АЗС и автозапчасти">
            <Image
              src={azs}
              width={143}
              height={138}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Образование">
            <Image
              src={education}
              width={133}
              height={119}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
          <MerchBox text="Товары для детей">
            <Image
              src={child}
              width={120}
              height={120}
              alt="2"
              className="merch-icon"
            />
          </MerchBox>
        </motion.div>
        <WhiteButton text="Посмотреть все магазины" />
      </div>
    </motion.section>
  );
};

export default Merchants;
