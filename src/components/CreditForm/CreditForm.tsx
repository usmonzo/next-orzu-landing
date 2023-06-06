"use client";
import { ChangeEvent, useEffect, useId, useState } from "react";
import { Checkbox, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import styles from "./CreditForm.module.scss";
import tablet from "../../../public/assets/tablet.svg";
import Image from "next/image";
import Select from "react-select";

import {
  customSelectStyles,
  secondSelectStyle,
} from "@/components/CreditForm/SelectProps";
import { citiesListData, projectType } from "@/data/_data";

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
  // const [selectedCity, setSelectedCity] = useState<string>("");
  // const [selectedProjectType, setSelectedProjectType] = useState("");
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [projectTypeList, setProjectTypeList] = useState<any[]>([]);
  const [body, setBody] = useState<any>();
  const [formData, setFormData] = useState({
    fio: "",
    phone_number: "",
    city: null,
    type_of_project: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "fio") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.replace(/[^а-яёË -]/iu, ""),
      });
    }
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.replace(/\D/g, ""),
    });
  };
  const handleProjectChange = (e: any) => {
    if (e) {
      setFormData({ ...formData, ["type_of_project"]: e.label });
      console.log(formData);
    }
  };
  const handleCityChange = (e: any) => {
    if (e) {
      setFormData({ ...formData, ["city"]: e.label });
      console.log(formData);
    }
  };
  useEffect(() => {
    setCitiesList(citiesListData);
    setProjectTypeList(projectType);
    setBody(document.getElementById("form"));
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
                name={"fio"}
                onChange={(e) => handleInputChange(e)}
                value={formData.fio ?? ""}
                placeholder="Фамилия, имя и отчество"
              />
              <div className={styles.inputs_horizontal_container}>
                <Input
                  className={styles.form_input}
                  {...inputProps}
                  name={"phone_number"}
                  onChange={(e) => handlePhoneChange(e)}
                  placeholder="Номер телефона"
                  value={formData.phone_number ?? ""}
                />
                <Select
                  instanceId={useId()}
                  isSearchable={false}
                  menuPortalTarget={body}
                  openMenuOnClick={true}
                  options={citiesList}
                  onChange={(e) => handleCityChange(e)}
                  placeholder={"Город"}
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
                name={"type_of_project"}
                instanceId={useId()}
                isSearchable={false}
                placeholder="Тип заявки"
                openMenuOnClick={true}
                options={projectTypeList}
                onChange={(e) => handleProjectChange(e)}
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
              isDisabled={true}
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
