"use client";
import {
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles from "./Calculator.module.scss";
const labelStyles = {
  mt: "4",
  ml: "-2.5",
  w: "100%",
  fontSize: "sm",
  color: "black",
};

export default function Calculator() {
  return (
    <>
      <div className={styles.choice_container}>
        <>
          <div className={styles.input_container}>
            <VStack alignItems={"flex-start"} p={"30px 0 10px" + " 40px"}>
              <label className={styles.input_label}>
                Введите сумму кредита
              </label>
              <Input
                variant={"unstyled"}
                _active={{}}
                _focus={{ border: "none", outline: "none" }}
                _hover={{}}
                border={{}}
                color={"#323438"}
                fontSize={"3rem"}
                fontWeight={"800"}
                size={"lg"}
                focusBorderColor={"transparent"}
                defaultValue={"125 000"}
                paddingLeft={0}
                maxLength={5}
                style={{ caretShape: "block" }}
                className={styles.money_input}
              />
            </VStack>
            <Slider
              aria-label="slider-ex-6"
              defaultValue={1000}
              min={50}
              max={50000}
              paddingTop={0}
              // maxW={'100px'}
              alignSelf={"center"}
              justifySelf={"flex-end"}
              className={styles.money_slider}
            >
              <SliderTrack
                alignSelf={"center"}
                height={"3"}
                borderBottomRightRadius={"190px"}
                borderBottomLeftRadius={"190px"}
                p={0}
                m={0}
                paddingTop={0}
                bg={"#E6E7E9"}
              >
                <SliderFilledTrack p={0} m={0} bg={"#323438"} />
              </SliderTrack>
              <SliderThumb
                border={"8px solid #323438"}
                bg={"white"}
                w={"28px"}
                h={"28px"}
                _focus={{ outline: "none", boxShadow: "none" }}
                _active={{}}
                outline={"none"}
                __css={{}}
              />
            </Slider>
            <div
              className={styles.money_limits_container}
              style={{ color: "black" }}
            >
              <p>50 см.</p>
              <p>25000 см.</p>
              <p>50000 см.</p>
            </div>
          </div>
        </>
        <div className={styles.monthes}>
          <div className={styles.month_horizontal}>
            <label className={styles.input_label}>Срок кредита</label>
            <div className={styles.monthes_horizontal}>
              <div className={styles.month_container}>
                <p>15</p>
                <p>дней</p>
              </div>
              <div className={styles.month_container}>
                <p>1</p>
                <p>мес.</p>
              </div>
              <div className={styles.month_container}>
                <p>2</p>
                <p>мес.</p>
              </div>
              <div className={styles.month_container}>
                <p>3</p>
                <p>мес.</p>
              </div>
              <div className={styles.month_container}>
                <p>6</p>
                <p>мес.</p>
              </div>
              <div className={styles.month_container}>
                <p>9</p>
                <p>мес.</p>
              </div>
              <div className={styles.month_container}>
                <p>12</p>
                <p>мес.</p>
              </div>
              <div className={styles.month_container}>
                <p>18</p>
                <p>мес.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sum_container}>
        <div className={styles.sum_headline}>
          <span>Ваш ежемесячный платеж</span>
          <h1>2 260.00 сом</h1>
        </div>
        <div className={styles.sum_description}>
          <div className={styles.sum_description_box}>
            <p>Комиссия</p>
            <h2>15%</h2>
          </div>
          <div className={styles.sum_description_box}>
            <p>Сумма</p>
            <h2>12000 сомони</h2>
          </div>
          <div className={styles.sum_description_box}>
            <p>Срок</p>
            <h2>6 месяцев</h2>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "0.6rem", color: "#323438" }}>
        * Расчет калькулятора предварительный. При оформлении кредита «Орзу»
        методы расчета могут отличаться в приложении Хумо Онлайн и кассах ЗАО
        МДО Хумо
      </p>
    </>
  );
}
