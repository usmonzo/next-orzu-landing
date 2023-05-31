"use client";
import { useEffect, useState } from "react";
import { Checkbox, Input } from "@chakra-ui/react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import styles from "./CreditForm.module.scss";
import tablet from "../../../public/assets/tablet.png";
import Image from "next/image";
import Select from "react-select";

import {
  customSelectStyles,
  secondSelectStyle,
} from "@/components/CreditForm/SelectProps";

const inputProps = {
  variant: "unstyled",
  _active: {},
  _focus: { border: "none", outline: "none" },
  _hover: {},
  border: {},
  color: "#323438",
  bg: "#D7DAE0",
  borderRadius: "16px",
  fontSize: "1.2rem",
  fontWeight: "800",
  size: "lg",
  focusBorderColor: "transparent",
  paddingLeft: 5,
  zIndex: 3,
};

export default function CreditForm() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [projectTypeList, setProjectTypeList] = useState<any[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState("");

  const citiesListData = [
    { label: "Душанбе", value: 4 },
    { label: "Хучанд", value: 1 },
    { label: "Истаравшан", value: 5 },
    { label: "Пенджикент", value: 6 },
    { label: "Куляб", value: 2 },
    { label: "Курган-Тюбе", value: 7 },
    { label: "Хорог", value: 3 },
    { label: "Нурек", value: 8 },
  ];
  const projectType = [
    { label: "Оформление орзу", value: 1 },
    { label: "Повысить лимит орзу", value: 2 },
    { label: "Оформление стандарт/проект кредита ", value: 3 },
  ];
  const changeCity = (event: any) => {
    if (event) {
      setSelectedCity(event.name);
    }
  };
  const changeProject = (event: any) => {
    if (event) {
      setSelectedProjectType(event.name);
    }
  };

  useEffect(() => {
    setCitiesList(citiesListData);
  }, []);
  useEffect(() => {
    setProjectTypeList(projectType);
  }, []);
  const body = document.getElementById("form");
  return (
    <>
      <section id="form" className={styles.form_section}>
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
                  menuPortalTarget={body}
                  openMenuOnClick={true}
                  options={citiesList}
                  onChange={changeCity}
                  placeholder={"Город"}
                  noOptionsMessage={() => "Нет такого города :("}
                  styles={customSelectStyles}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: "transparent",
                    },
                  })}
                />
              </div>
              <Select
                isSearchable={false}
                placeholder="Тип заявки"
                openMenuOnClick={true}
                options={projectTypeList}
                onChange={changeCity}
                noOptionsMessage={() => "Нет такого города :("}
                styles={secondSelectStyle}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: "transparent",
                  },
                })}
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
                m={0}
                w={"24px"}
                h={"22px"}
                borderRadius={"6px"}
              />
              <p>
                Принимаю условия и даю согласие на обработку и использование
                моих персональных данных и разрешаю сделать запрос в бюро
                кредитных историй
              </p>
            </div>
            <PrimaryButton
              text={"Получить код"}
              aligned={"center"}
              zIndex={1}
            />
          </div>
          <Image src={tablet} alt={""} className={styles.tablet_icon} />
        </div>
      </section>
    </>
  );
}
