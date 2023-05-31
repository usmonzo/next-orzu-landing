"use client";
import Calculator from "../Calculator/Calculator";
import styles from "./PreFooterSection.module.scss";
import React from "react";
import Image from "next/image";
import bank from "../../../public/assets/bank.png";
import WhiteButton from "@/components/Buttons/WhiteButton";
import CreditForm from "@/components/CreditForm/CreditForm";
import { AppBlock } from "@/components/AppBlock/AppBlock";

export default function PreFooterSection() {
  return (
    <section className={styles.pre_footer_container}>
      <div className={styles.container}>
        <h1 className={styles.calc_headline}>Посчитайте свой кредит</h1>
        <Calculator />
        <div className={styles.boxes_horizontal}>
          <div className={styles.blue_box}>
            <h1 className={styles.blue_box_headline}>
              Простой процесс получения кредита
            </h1>
            <WhiteButton text={"Подробнее"} />
          </div>
          <div className={styles.black_box}>
            <Image
              src={bank}
              alt={""}
              width={573.11}
              height={538}
              style={{ opacity: "0.2" }}
              className={styles.bank_icon}
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <h1 className={styles.black_box_headline}>
                Приобретайте товары в рассрочку без переплаты
              </h1>
              <WhiteButton text={"Получить кредит"} />
            </div>
          </div>
        </div>

        <CreditForm />
        <AppBlock />
      </div>
    </section>
  );
}
