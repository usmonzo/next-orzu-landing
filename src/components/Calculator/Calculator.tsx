"use client";
import {
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from "@chakra-ui/react";
import styles from "./Calculator.module.scss";
import { useCallback, useState } from "react";
import { currencyArray, dateArray } from "@/data/_data";
import styled from "@emotion/styled";

interface IRadioProps {
  activeClass?: any;
  countOfMonth: number;
}

const MonthsContainerGap = styled.div<IRadioProps>`
  //width: 100%;
  //height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  //background: #3c7dbe;
  //gap: calc(12% / 7);
  //gap: 12%;
  //row-gap: 8px;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    //gap: 4%;
    row-gap: 8px;
  }
`;
const MonthsContainerChild = styled.div<IRadioProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 5px;
  //max-width: 100%;
  width: ${(props: IRadioProps) => 90 / props.countOfMonth + "%"};
  //min-width: 286px;
  //height: 100%;
  //background: #030303;
  background: ${(props: IRadioProps) =>
    props.activeClass ? "#323438" : "#F1F2F4"};
  //color: #ffffff;
  border-radius: 12px;
  transition: 0.1s all ease;

  p:first-of-type {
    color: ${(props: IRadioProps) =>
      props.activeClass ? "#ffffff" : "#090909"};
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    // line-height: 100%;
    letter-spacing: -0.04em;
    //color: ({props})=>props.active ?#ffffff: #090909;

    @media screen and (max-width: 440px) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 390px) {
      font-size: 1.2rem;
      @media screen and (max-width: 360px) {
        font-size: 1.2rem;
      }
    }
  }

  p:last-of-type {
    color: ${(props: IRadioProps) =>
      props.activeClass ? "#ffffff" : "#000000"};
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: -0.04em;
    @media screen and (max-width: 440px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 660px) {
    width: ${(props: IRadioProps) =>
      // props.countOfMonth % 2 === 0
      //   ? (90 / props.countOfMonth) * 2 + "%"
      //   : (90 / (props.countOfMonth - 1)) * 2 + "%
      (90 / (props.countOfMonth - (props.countOfMonth % 2))) * 2}%;

    :last-of-type {
      width: ${(props: IRadioProps) =>
        props.countOfMonth % 2 === 0
          ? (90 / props.countOfMonth) * 2 + "%"
          : 100 + "%"};
    }
  }
  @media screen and (max-width: 390px) {
    padding: 12px;
  }
`;

export default function Calculator() {
  const [cashInput, setCashInput] = useState(1000);
  const [percent, setPercent] = useState(2);
  const [term, setTerm] = useState(1);
  const [termWord, setTermWord] = useState("дней");
  const [active, setActive] = useState(0);

  const handleSliderChange = useCallback(
    (e: any) => {
      if (e >= 50000) {
        e = 50000;
      } else if (e > 50) {
        e -= 50;
      } else if (e < 50) {
        e = 50;
      } else {
        e = 50;
      }
      setCashInput(e);
    },
    [cashInput]
  );
  const handleInputChange = useCallback((e: any) => {
    if (e.target.value > 50000) {
      e.target.value = 50000;
    } else if (cashInput === 0) {
      e.target.value = 50;
      // setCashInput(50);
    }
    setCashInput(e.target.value.replace(/\D/, ""));
  }, []);

  const countingFnc = (percent: number, month: number, cashCount: number) => {
    const result = (cashCount * (100 + percent)) / 100 / month;
    return result.toFixed(2);
  };

  const radioHandleChange = (
    percentage: number,
    month: number,
    word: string
  ) => {
    setTerm(month);
    setPercent(percentage);
    setTermWord(word);
  };
  return (
    <>
      <div className={styles.choice_container}>
        <>
          <div className={styles.input_container}>
            <VStack alignItems={"flex-start"} p={"10px 0 10px" + " 40px"}>
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
                fontWeight={"700"}
                size={"lg"}
                focusBorderColor={"transparent"}
                paddingLeft={0}
                style={{ caretShape: "block" }}
                value={cashInput ?? 50}
                onChange={(e) => handleInputChange(e)}
                className={styles.money_input}
                minLength={2}
              />
            </VStack>
            <Slider
              aria-label="slider-ex-6"
              defaultValue={cashInput}
              min={50}
              max={50000}
              paddingTop={0}
              onChange={(e) => handleSliderChange(e)}
              value={cashInput}
              alignSelf={"center"}
              justifySelf={"flex-end"}
              className={styles.money_slider}
              step={500}
              focusThumbOnChange={false}
              autoFocus={false}
            >
              <SliderTrack
                alignSelf={"center"}
                height={"4"}
                borderBottomRightRadius={"190px"}
                borderBottomLeftRadius={"190px"}
                p={0}
                m={0}
                paddingTop={0}
                bg={"#E6E7E9"}
                autoFocus={false}
              >
                <SliderFilledTrack
                  p={0}
                  m={0}
                  bg={"#323438"}
                  autoFocus={false}
                />
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
              {currencyArray.map((money, idx) => (
                <p
                  onClick={() => setCashInput(money.count)}
                  style={{ cursor: "pointer" }}
                  key={idx}
                >
                  {money.count + money.currency}
                </p>
              ))}
            </div>
          </div>
        </>
        <div className={styles.monthes}>
          <div className={styles.month_horizontal}>
            <label className={styles.input_label}>Срок кредита</label>
            <MonthsContainerGap
              countOfMonth={dateArray.length}
              // 10% is all gaps in container
              // dataArray.length -1 its count of gaps between containers
            >
              {dateArray.map((date, idx) => (
                <MonthsContainerChild
                  countOfMonth={dateArray.length}
                  key={idx}
                  activeClass={active === idx}
                  // className={styles.month_container_active}
                  // 90% all containers width
                  // dataArray.length is count of containers
                  onClick={() => {
                    date.count === 15
                      ? radioHandleChange(date.percent, 1, date.word)
                      : radioHandleChange(date.percent, date.count, date.word);
                    setActive(idx);
                    console.log(active);
                  }}
                >
                  <p>{date.count}</p>
                  <p>{date.percent < 3 ? "дней" : "мес"}</p>
                </MonthsContainerChild>
              ))}
            </MonthsContainerGap>
          </div>
        </div>
      </div>
      <div className={styles.sum_container}>
        <div className={styles.sum_headline}>
          <span>Ваш ежемесячный платеж</span>
          <h1>{countingFnc(percent, term, cashInput)} сомони</h1>
        </div>
        <div className={styles.sum_description}>
          <div className={styles.sum_description_box}>
            <p>Комиссия</p>
            <h2>{percent}%</h2>
          </div>
          <div className={styles.sum_description_box}>
            <p>Сумма</p>
            <h2>{cashInput} сомони</h2>
          </div>
          <div className={styles.sum_description_box}>
            <p>Срок</p>
            <h2 style={{ maxWidth: "245px", width: "100%" }}>
              {termWord === "дней"
                ? 15 + " " + termWord
                : term + " " + termWord}
            </h2>
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
