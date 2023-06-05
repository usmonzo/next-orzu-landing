"use client";
import { useEffect, useId, useState } from "react";
import { background, Checkbox, Input } from "@chakra-ui/react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import styles from "./CreditForm.module.scss";
import tablet from "../../../public/assets/tablet.svg";
import Image from "next/image";
import Select from "react-select";

import {
  customSelectStyles,
  secondSelectStyle,
} from "@/components/CreditForm/SelectProps";

const inputProps = {
  variant: "unstyled",
  _active: {},
  _focus: { borderColor: "black", outline: "none" },
  _hover: { border: "1px solid #030303" },
  color: "#323438",
  bg: "#D7DAE0",
  borderRadius: "16px",
  fontSize: "1.2rem",
  fontWeight: "800",
  size: "lg",
  border: "1px solid transparent",
  focusBorderColor: "transparent",
  paddingLeft: 5,
  zIndex: 3,
};

export default function CreditForm() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [projectTypeList, setProjectTypeList] = useState<any[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [body, setBody] = useState<any>();
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
    { label: "Оформление орзу", value: 1, id: 1 },
    { label: "Повысить лимит орзу", value: 2, id: 2 },
    { label: "Оформление стандарт/проект кредита ", value: 3, id: 3 },
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
    setProjectTypeList(projectType);
    setBody(document.getElementById("form"));
  }, []);

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
                  instanceId={useId()}
                  isSearchable={false}
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
                instanceId={useId()}
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
                // _active={{}}
                size={"lg"}
                // backgroundColor={'#D7DAE0'}
                // border={'1px solid #000'}
                spacing={2}
                outline={{}}
                // _checked={{}}
                iconColor={"#090909"}
                borderColor={"#ff6200"}
                colorScheme={"black"}
                // p={0}
                // m={0}
                borderRadius={"10px"}
                zIndex={1}
              >
                <p>
                  Принимаю условия и даю согласие на обработку и использование
                  моих персональных данных и разрешаю сделать запрос в бюро
                  кредитных историй
                </p>
              </Checkbox>
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
