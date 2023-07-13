"use client";
import { ChangeEvent, useEffect, useId, useState } from "react";
import {
  Checkbox,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
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
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { PinInputFieldProps } from "@/components/MerchantsRegistration/MerchantFormComponents/CustomProps";
import { AiFillCheckCircle } from "react-icons/ai";
import WhiteButton from "@/components/Buttons/WhiteButton";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const [codeOtpToSend, setCodeOtpToSend] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [otpCheckStatus, setOtpCheckStatus] = useState("idle");
  const [phoneIsRegistered, setPhoneIsRegistered] = useState(false);
  const [clientDataToSend, setClientDataToSend] = useState({
    type_of_client: "",
    full_name: "",
    phone: "",
    city: "",
    application_type: "",
  });
  const {
    isLoading: isPostLoading,
    mutate: postFormData,
    status: postingStatus,
  } = useMutation(
    async (type_of_client: string) => {
      return await apiClient.post(`/landing/sendApplication`, {
        full_name: formData.full_name,
        phone: formData.phone,
        city: formData.city,
        application_type: formData.application_type,
        type_of_client: type_of_client,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        setOtpCheckStatus("idle");
        onOpen();
        console.log(result);
        // setPostResult(fortmatResponse(result));
      },
      onError: (err) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
        // console.log(err);
      },
    }
  );
  interface IOtpRequest {
    data: {
      phone: string;
      otp: string;
    };
  }
  const {
    status: OtpStatus,
    isLoading: isOtpLoading,
    mutate: otpCodeSend,
    // isError: isOtpError,
  } = useMutation(
    async (queries: IOtpRequest) => {
      return await apiClient.post(
        `/landing/checkOtp?phone=${queries.data.phone}&code=${queries.data.otp}`,
        {}
      );
    },
    {
      onSuccess: (res) => {
        setCodeOtpToSend("");
        console.log(res);
        setPhoneIsRegistered(false);
      },
      onError: (err: any) => {
        const errCode = err.response.status;
        if (errCode === 409) {
          setFormStatus("idle");
          setPhoneIsRegistered(true);
        }
        setCodeOtpToSend("");
      },
    }
  );
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "full_name") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        //.replace(/[^а-яёË -]/iu, ""),
      });
    }
  };
  useEffect(() => {
    setFormStatus(postingStatus);
  }, [postingStatus, isOpen]);
  useEffect(() => {
    setOtpCheckStatus(OtpStatus);
  }, [OtpStatus, isOpen]);
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
  const handleOtpChange = (e: any) => {
    setOtpCheckStatus("idle");
    setCodeOtpToSend(e);
  };
  const otpHandleSubmit = (code: any) => {
    if (code.length > 3) {
      otpCodeSend({
        data: {
          phone: formData.phone,
          otp: code,
        },
      });
      setCodeOtpToSend("");
    }
  };
  useEffect(() => {
    setCitiesList(citiesListData);
    setProjectTypeList(projectType);
    setBody(document.getElementById("form"));
  }, []);

  useEffect(() => {
    console.log(OtpStatus);
  }, [OtpStatus]);

  return (
    <>
      {/*<section className={styles.form_section}>*/}
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
                  p={"20px 0"}
                  _focus={{ borderColor: "black", outline: "none" }}
                  size={"lg"}
                  maxLength={9}
                  focusBorderColor={"transparent"}
                  fontWeight={800}
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
            onClick={() => {
              postFormData("user");
            }}
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc={false}>
        <ModalOverlay />
        {postingStatus === "success" ? null : <ModalCloseButton />}
        <ModalContent
          className={styles.merchant_modal}
          maxWidth={postingStatus !== "success" ? "500px" : "876px"}
        >
          <div className={styles.merchant_ad_modal_container}>
            {/*<ModalCloseButton color={"#000"} />*/}
            {postingStatus === "success" && (
              <>
                {OtpStatus === "idle" ? (
                  <>
                    <h1 className={styles.modal_headline}>
                      Подтверждение номера
                    </h1>
                    <p className={styles.modal_paragraph}>
                      Мы отправили код подтверждения на указанный номер телефона
                    </p>
                    <HStack justifyContent={"center"}>
                      <PinInput
                        isDisabled={isOtpLoading}
                        size={"lg"}
                        autoFocus
                        onChange={(e) => handleOtpChange(e)}
                        onComplete={(e) => otpHandleSubmit(e)}
                        value={codeOtpToSend}
                        placeholder={""}
                      >
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                      </PinInput>
                    </HStack>
                  </>
                ) : OtpStatus === "success" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <AiFillCheckCircle color={"#34BA31"} size={"5em"} />
                    <div>
                      <h1 className={styles.modal_headline}>
                        Номер подтвержден
                      </h1>
                      <p
                        className={styles.modal_paragraph}
                        style={{ maxWidth: "416px" }}
                      >
                        Мы приняли вашу заявку, в скорем времени с вами свяжутся
                        наши специалисты для оформления Орзу
                      </p>
                    </div>
                    <div className={styles.white_modal_content}>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>ФИО</p>
                        <p
                          className={styles.white_modal_primary_text}
                          style={{ maxWidth: "310px" }}
                        >
                          {formData.full_name}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>
                          Номер телефона
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {formData.phone}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>
                          Город
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {formData.city}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>
                          Тип заявки
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {formData.application_type}
                        </p>
                      </div>
                    </div>
                    <WhiteButton
                      text={"Закрыть"}
                      onClick={() => {
                        setOtpCheckStatus("idle");
                        setFormData({
                          full_name: "",
                          phone: "",
                          city: "",
                          application_type: "",
                        });
                        onClose();
                      }}
                    />
                  </div>
                ) : OtpStatus === "loading" ? (
                  <Spinner color={"black"} borderWidth={"4px"} />
                ) : OtpStatus === "error" ? (
                  <>
                    <h1 className={styles.modal_headline}>
                      Подтверждение номера
                    </h1>
                    <p className={styles.modal_paragraph}>
                      Мы отправили код подтверждения на указанный номер телефона
                    </p>
                    <HStack justifyContent={"center"}>
                      <PinInput
                        isDisabled={isOtpLoading || phoneIsRegistered}
                        size={"lg"}
                        autoFocus
                        onChange={(e) => handleOtpChange(e)}
                        onComplete={(e) => otpHandleSubmit(e)}
                        value={codeOtpToSend}
                        placeholder={""}
                      >
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                        <PinInputField
                          {...PinInputFieldProps}
                          className={styles.pin_input_item}
                        />
                      </PinInput>
                    </HStack>
                    {phoneIsRegistered ? (
                      <>
                        <p style={{ color: "red", alignSelf: "center" }}>
                          Заявка от этого номера уже существует
                        </p>
                        <WhiteButton
                          margin={"10px 0 0"}
                          text={"Закрыть"}
                          onClick={() => {
                            setOtpCheckStatus("idle");
                            setFormData({
                              full_name: "",
                              phone: "",
                              city: "",
                              application_type: "",
                            });
                            onClose();
                            setPhoneIsRegistered(false);
                          }}
                        />
                      </>
                    ) : (
                      <p style={{ color: "red", alignSelf: "center" }}>
                        Неправильно введен код подтверждения
                      </p>
                    )}
                  </>
                ) : null}
              </>
            )}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
