"use client";
import styles from "./CreditForm.module.scss";
import { Checkbox, Input, Select } from "@chakra-ui/react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import tablet from "../../../public/assets/tablet.png";
import Image from "next/image";

const inputProps = {
  variant: "unstyled",
  _active: {},
  _focus: { border: "none", outline: "none" },
  _hover: {},
  border: {},
  color: "#323438",
  // fontSize: "1.2rem",
  fontWeight: "800",
  size: "lg",
  focusBorderColor: "transparent",
  paddingLeft: 0,
  zIndex: 3,
};

export default function CreditForm() {
  return (
    <section id={"form"} className={styles.form_section}>
      <div className={styles.form_container}>
        <div className={styles.form_content}>
          <h1 className={styles.form_headline}>Оставить заявку </h1>
          <div className={styles.form_inputs_container}>
            <Input
              className={styles.form_input}
              {...inputProps}
              placeholder="Фамилия, имя и отчество"
            />
            <div className={styles.inputs_horizontal_container}>
              <Input
                className={styles.form_input}
                {...inputProps}
                placeholder="Номер телефона"
              />
              <Select
                className={styles.form_input}
                {...inputProps}
                placeholder="Регион"
              />
            </div>
            <Select
              className={styles.form_input}
              {...inputProps}
              placeholder="Тип заявки"
            />
          </div>
          <div className={styles.rules_container}>
            <Checkbox
              className={styles.rules_checkbox}
              _active={{}}
              size={"lg"}
              backgroundColor={"#D7DAE0"}
              border={{}}
              outline={{}}
              borderColor={"transparent"}
              colorScheme={"red"}
              p={0}
              w={"24px"}
              h={"22px"}
              borderRadius={"6px"}
            />
            <p>
              Принимаю условия и даю согласие на обработку и использование моих
              персональных данных и разрешаю сделать запрос в бюро кредитных
              историй
            </p>
          </div>
          <PrimaryButton text={"Получить код"} aligned={"center"} />
        </div>
        <Image src={tablet} alt={""} className={styles.tablet_icon} />
      </div>
    </section>
  );
}
