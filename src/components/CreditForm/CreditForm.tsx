"use client";
import { ChangeEvent, useEffect, useId, useState } from "react";
import { Checkbox, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import styles from "./CreditForm.module.scss";
import tablet from "../../../public/assets/tablet.svg";
import Image from "next/image";
import Select from "react-select";
import apiClient from "../../utils/axios/http-common";

import {
  customSelectStyles,
  secondSelectStyle,
} from "@/components/CreditForm/SelectProps";
import { citiesListData, projectType } from "@/data/_data";
import { useMutation } from "@tanstack/react-query";

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
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [projectTypeList, setProjectTypeList] = useState<any[]>([]);
  const [body, setBody] = useState<HTMLElement | null>();
  const [postResult, setPostResult] = useState(null);
  const [agreementCheckbox, setAgreementCheckbox] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    city: "",
    application_type: "",
  });

  const { isLoading: isPostLoading, mutate: postFormData } = useMutation(
    async () => {
      return await apiClient.post(`/landing/sendApplication`, {
        full_name: formData.full_name,
        phone: formData.phone,
        city: formData.city,
        application_type: formData.application_type,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log(result);
        // setPostResult(fortmatResponse(result));
      },
      onError: (err) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
        console.log(err);
      },
    }
  );
  useEffect(() => {
    console.log(agreementCheckbox);
  }, [agreementCheckbox]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "full_name") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        //.replace(/[^а-яёË -]/iu, ""),
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
      setFormData({ ...formData, ["application_type"]: e.label });
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
                name={"full_name"}
                onChange={(e) => handleInputChange(e)}
                value={formData.full_name ?? ""}
                placeholder="Фамилия, имя и отчество"
              />
              <div className={styles.inputs_horizontal_container}>
                <InputGroup {...inputProps}>
                  <InputLeftAddon
                    color={"black"}
                    children={"+992"}
                    backgroundColor={"#d7dae0"}
                    paddingRight={3}
                  />
                  <Input
                    _focus={{ borderColor: "black", outline: "none" }}
                    size={"lg"}
                    maxLength={9}
                    focusBorderColor={"transparent"}
                    fontWeight={700}
                    name={"phone"}
                    onChange={(e) => handlePhoneChange(e)}
                    placeholder="Номер телефона"
                    value={formData.phone ?? ""}
                  />
                </InputGroup>
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
                isOptionDisabled={(option: any) => option.disabled}
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
                size={"lg"}
                spacing={2}
                outline={{}}
                iconColor={"#090909"}
                borderColor={"#ff6200"}
                colorScheme={"black"}
                checked={agreementCheckbox}
                onChange={(e) => setAgreementCheckbox(e.target.checked)}
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
              onClick={postFormData}
              isDisabled={
                formData.full_name === "" ||
                formData.phone.length !== 9 ||
                formData.city === "" ||
                formData.application_type === "" ||
                !agreementCheckbox
              }
              isLoading={isPostLoading}
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
