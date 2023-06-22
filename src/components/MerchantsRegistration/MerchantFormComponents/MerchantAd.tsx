"use client";
import styles from "./MerchantAd.module.scss";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  Button,
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
  // size: "lg",
  border: "1px solid transparent",
  focusBorderColor: "transparent",
  paddingLeft: 5,
  zIndex: 3,
};
const PinInputFieldProps = {
  _active: {},
  _focus: { borderColor: "black", outline: "none" },
  _hover: { border: "1px solid #030303" },
  color: "#323438",
  bg: "#D7DAE0",
  borderRadius: "16px",
  fontSize: "1.5rem",
  fontWeight: "800",
  border: "1px solid transparent",
  focusBorderColor: "red",
  zIndex: 3,
  width: "72px",
  height: "72px",
  _focusVisible: {},
};
export const MerchantAd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const id = useId();
  const [body, setBody] = useState<HTMLElement | null>();
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
  const [dataStatus, setDataStatus] = useState("idle");

  const {
    status,
    isLoading: isFormLoading,
    mutate: postFormData,
    isError: isFormError,
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
        // setPostResult(fortmatResponse(result));
      },
      onError: (err) => {
        // setPostResult(fortmatResponse(err.response?.data || err));
        console.log(err);
      },
    }
  );

  useEffect(() => {
    setCategoriesListData(categoriesList);
    // setBody(document.getElementById("form"));
  }, []);

  const handleSelectChange = (e: any) => {
    if (e) {
      setMerchantDataToSend({
        ...merchantDataToSend,
        ["industry"]: e.label,
      });
      // console.log(merchantDataToSend.industry);
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMerchantDataToSend({
      ...merchantDataToSend,
      [e.target.name]: e.target.value,
    });
    // console.log(merchantDataToSend);
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMerchantDataToSend({
      ...merchantDataToSend,
      [e.target.name]: e.target.value.replace(/\D/g, ""),
    });
  };

  useEffect(() => {
    if (status === "loading") {
      setDataStatus("loading");
    } else if (status === "success") {
      setDataStatus("success");
    } else if (status === "error") {
      setDataStatus("error");
    }
  }, [status, isOpen]);

  useEffect(() => {
    setDataStatus("idle");
    console.log(222222223232323232);
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
            {dataStatus === "success" && (
              <>
                <h1 className={styles.modal_headline}>Подтверждение номера</h1>
                <p className={styles.modal_paragraph}>
                  Мы отправили код подтверждения на указанный номер телефона
                </p>
              </>
            )}
            <ModalCloseButton color={"#000"} />
            {/*{isFormError ?  : 2}*/}
            {dataStatus === "success" ? (
              <HStack justifyContent={"center"}>
                <PinInput size={"lg"} autoFocus>
                  <PinInputField {...PinInputFieldProps} />
                  <PinInputField {...PinInputFieldProps} />
                  <PinInputField {...PinInputFieldProps} />
                  <PinInputField {...PinInputFieldProps} />
                </PinInput>
              </HStack>
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
                <InputGroup {...inputProps} justifyItems={"center"}>
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
                    p={"20px 28px"}
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
                  text={"Подключить"}
                  padding={"25px 60px"}
                  isLoading={isFormLoading}
                  onClick={() => postFormData("merchant", merchIndustry)}
                  zIndex={0}
                />
                {/*<ModalFooter*/}
                {/*  justifyContent={"center"}*/}
                {/*  zIndex={0}*/}
                {/*  paddingBottom={0}*/}
                {/*>*/}
                {/* */}
                {/*</ModalFooter>*/}
              </>
            ) : null}
          </div>
          <Image
            src={logoBackground}
            alt={"2222"}
            className={styles.merchant_modal_logo}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
