"use client";
import styles from "./MerchantAd.module.scss";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import Select from "react-select";
import { ChangeEvent, useEffect, useId, useState } from "react";
import { customMerchantSelectStyles } from "@/components/CreditForm/SelectProps";
import { categoriesList } from "@/data/_data";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/utils/axios/http-common";
import Image from "next/image";
import logoBackground from "../../../../public/assets/backGroundLogo.svg";
import {
  inputProps,
  PinInputFieldProps,
} from "@/components/MerchantsRegistration/MerchantFormComponents/CustomProps";
import WhiteButton from "@/components/Buttons/WhiteButton";
import { BiSolidErrorCircle } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

export const MerchantAd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const id = useId();
  const [categoriesListData, setCategoriesListData] = useState<any[]>([]);
  const [merchantDataToSend, setMerchantDataToSend] = useState({
    type_of_client: "",
    full_name: "",
    company_name: "",
    address: "",
    phone: "",
    industry: "",
  });
  const [merchIndustry, setMerchIndustry] = useState<any>("");
  const [codeOtpToSend, setCodeOtpToSend] = useState("");
  const [dataStatus, setDataStatus] = useState("idle");
  const [otpCheckStatus, setOtpCheckStatus] = useState("idle");
  const [phoneIsRegistered, setPhoneIsRegistered] = useState(false);

  const {
    status,
    isLoading: isFormLoading,
    mutate: postFormData,
    // isError: isFormError,
    // isIdle: isFormIdle,
  } = useMutation(
    async (type_of_client: string) => {
      return await apiClient.post(`/landing/sendApplication`, {
        full_name: merchantDataToSend.full_name,
        company_name: merchantDataToSend.company_name,
        address: merchantDataToSend.address,
        phone: merchantDataToSend.phone,
        industry:
          merchantDataToSend.industry === "Другое"
            ? merchIndustry
            : merchantDataToSend.industry,
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
        console.log(result);
        setOtpCheckStatus("idle");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

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
        //        const result = {
        //          status: res.status + "-" + res.statusText,
        //          headers: res.headers,
        //          data: res.data,
        //        };
        setCodeOtpToSend("");
        console.log(res);
        setPhoneIsRegistered(false);
      },
      onError: (err: any) => {
        const errCode = err.response.status;
        if (errCode === 409) {
          setDataStatus("idle");
          setPhoneIsRegistered(true);
        }
        setCodeOtpToSend("");
      },
    }
  );
  interface IOtpRequest {
    data: {
      phone: string;
      otp: string;
    };
  }
  const handleOtpChange = (e: any) => {
    setCodeOtpToSend(e);
  };
  const otpHandleSubmit = (code: any) => {
    if (code.length > 3) {
      otpCodeSend({
        data: {
          phone: merchantDataToSend.phone,
          otp: code,
        },
      });
    }
  };

  useEffect(() => {
    setCategoriesListData(categoriesList);
  }, []);

  const handleSelectChange = (e: any) => {
    if (e) {
      setMerchantDataToSend({
        ...merchantDataToSend,
        ["industry"]: e.label,
      });
      setPhoneIsRegistered(false);
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneIsRegistered(false);
    setMerchantDataToSend({
      ...merchantDataToSend,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneIsRegistered(false);
    setMerchantDataToSend({
      ...merchantDataToSend,
      [e.target.name]: e.target.value.replace(/\D/g, ""),
    });
  };

  useEffect(() => {
    // if (status === "loading") {
    //   setDataStatus("loading");
    // } else if (status === "success") {
    //   setDataStatus("success");
    // } else if (status === "error") {
    //   setDataStatus("error");
    // }
    setDataStatus(status);
  }, [status, isOpen]);
  useEffect(() => {
    setOtpCheckStatus(OtpStatus);
  }, [OtpStatus, isOpen]);

  useEffect(() => {
    setDataStatus("idle");
    setOtpCheckStatus("idle");
    setMerchantDataToSend({
      type_of_client: "",
      full_name: "",
      company_name: "",
      address: "",
      phone: "",
      industry: "",
    });
  }, [!isOpen]);

  return (
    <>
      <div className={styles.merchant_ad_container}>
        <div className={styles.merchant_ad_content}>
          <h1 className={styles.merchant_ad_headline}>
            Увеличьте свои продажи! Станьте частью ОРЗУ
          </h1>
          <p className={styles.merchant_ad_paragraph}>
            Подключите свой бизнес к Орзу, чтобы дать возможность покупателям
            оформлять кредит и делать покупки в рассрочку
          </p>
          <PrimaryButton
            text={"Подключить"}
            padding={"20px 40px"}
            onClick={() => onOpen()}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        {dataStatus === "success" ? null : <ModalCloseButton />}
        <ModalContent
          className={styles.merchant_modal}
          maxWidth={dataStatus !== "success" ? "500px" : "876px"}
        >
          <div className={styles.merchant_ad_modal_container}>
            <ModalCloseButton color={"#000"} />
            {dataStatus === "success" ? (
              <>
                {otpCheckStatus === "idle" ? (
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
                ) : otpCheckStatus === "success" ? (
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
                          {merchantDataToSend.full_name}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>
                          Название предприятия
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {merchantDataToSend.company_name}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p
                          className={styles.white_modal_secondary_text}
                          style={{ maxWidth: "310px" }}
                        >
                          Адрес
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {merchantDataToSend.address}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>
                          Номер телефона
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {merchantDataToSend.phone}
                        </p>
                      </div>
                      <div className={styles.white_modal_horizontal}>
                        <p className={styles.white_modal_secondary_text}>
                          Отрасль
                        </p>
                        <p className={styles.white_modal_primary_text}>
                          {merchantDataToSend.industry}
                        </p>
                      </div>
                    </div>
                    <WhiteButton text={"Закрыть"} onClick={onClose} />
                  </div>
                ) : otpCheckStatus === "loading" ? (
                  <Spinner color={"black"} borderWidth={"4px"} />
                ) : otpCheckStatus === "error" ? (
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
                    <p style={{ color: "red", alignSelf: "center" }}>
                      Неправильно введен код подтверждения
                    </p>
                  </>
                ) : null}
              </>
            ) : dataStatus === "loading" ? (
              <Spinner color={"#000"} />
            ) : dataStatus === "idle" ? (
              <>
                <h1 className={styles.modal_headline}>Заявка на подключение</h1>
                <Input
                  className={styles.merchant_ad_input}
                  isDisabled={isFormLoading}
                  p={"20px 0"}
                  name={"full_name"}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="ФИО"
                  value={merchantDataToSend.full_name ?? ""}
                  {...inputProps}
                />
                <Input
                  className={styles.merchant_ad_input}
                  isDisabled={isFormLoading}
                  p={"20px 0"}
                  name={"company_name"}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Название предприятия"
                  value={merchantDataToSend.company_name ?? ""}
                  {...inputProps}
                />
                <Input
                  className={styles.merchant_ad_input}
                  isDisabled={isFormLoading}
                  p={"20px 0"}
                  name={"address"}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Адрес"
                  value={merchantDataToSend.address ?? ""}
                  {...inputProps}
                />
                <InputGroup
                  {...inputProps}
                  justifyItems={"center"}
                  className={styles.merchant_ad_input}
                >
                  <InputLeftAddon
                    color={"black"}
                    children={"+992"}
                    backgroundColor={"#d7dae0"}
                    className={styles.merchant_ad_input_addon}
                  />
                  <Input
                    h={"100%"}
                    isDisabled={isFormLoading}
                    className={styles.merchant_ad_input_phone}
                    p={"0 12px"}
                    maxLength={9}
                    fontWeight={800}
                    name={"phone"}
                    onChange={(e) => handlePhoneChange(e)}
                    placeholder="Номер телефона"
                    value={merchantDataToSend.phone ?? ""}
                  />
                </InputGroup>
                <Select
                  isDisabled={isFormLoading}
                  instanceId={id}
                  isSearchable={false}
                  // menuPortalTarget={}
                  name={"industry"}
                  openMenuOnClick={true}
                  options={categoriesListData}
                  onChange={(e) => handleSelectChange(e)}
                  placeholder={"Отрасль"}
                  styles={customMerchantSelectStyles}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: "transparent",
                    },
                  })}
                />
                {merchantDataToSend.industry === "Другое" && (
                  <Input
                    isDisabled={isFormLoading}
                    className={styles.merchant_ad_input}
                    p={"20px 0"}
                    name={"industry"}
                    onChange={(e) => setMerchIndustry(e.target.value)}
                    placeholder="Напишите отрасль"
                    // value={formData.phone ?? ""}
                    {...inputProps}
                  />
                )}
                <PrimaryButton
                  isDisabled={
                    merchantDataToSend.industry === "" ||
                    merchantDataToSend.phone.length !== 9 ||
                    merchantDataToSend.address === "" ||
                    merchantDataToSend.company_name === "" ||
                    merchantDataToSend.full_name === ""
                  }
                  text={"Подключить"}
                  padding={"25px 60px"}
                  isLoading={isFormLoading}
                  onClick={() => postFormData("merchant", merchIndustry)}
                  zIndex={0}
                />
                {phoneIsRegistered && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <BiSolidErrorCircle color={"red"} size={20} />
                    <h1 style={{ color: "red", fontSize: "12px" }}>
                      На данный номер уже оформлена заявка
                    </h1>
                  </div>
                )}
              </>
            ) : dataStatus === "error" ? (
              <>
                <h1 className={styles.modal_headline}>Неправильные данные</h1>
                <p className={styles.modal_paragraph}>
                  Неправильно указан номер телефона. Проверьте количество
                  символов и повторите попытку
                </p>
                <PrimaryButton
                  text={"Подключить"}
                  padding={"25px 60px"}
                  isLoading={isFormLoading}
                  onClick={() => {
                    setDataStatus("");
                    setOtpCheckStatus("idle");
                  }}
                  zIndex={0}
                />
              </>
            ) : null}
          </div>
          <Image
            src={logoBackground}
            alt={"HUMO"}
            className={styles.merchant_modal_logo}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
