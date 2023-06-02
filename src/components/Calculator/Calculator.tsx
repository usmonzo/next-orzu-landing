"use client";
import {
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
  Box,
  useRadio,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import styles from "./Calculator.module.scss";
import { useCallback, useState } from "react";

const dateArray = [
  { count: 15, word: "дней", percent: 2 },
  { count: 1, word: "месяц", percent: 4 },
  { count: 2, word: "месяцa", percent: 6 },
  { count: 3, word: "месяцa", percent: 8 },
  { count: 6, word: "месяцев", percent: 13 },
  { count: 9, word: "месяцев", percent: 18 },
  { count: 12, word: "месяцев", percent: 23 },
  { count: 18, word: "месяцев", percent: 34 },
];

interface IRadioProps {
  isChecked: boolean;
  children: any;
  onChange: () => void;
  value: string;
}
function RadioCard(props: IRadioProps) {
  const [defaultCheck, setDefaultCheck] = useState(false);
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        className={styles.month_container}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        {...checkbox}
        // color="black"
        _checked={{
          color: "#ffffff",
          background: "#f1f2f4",
        }}
        _focus={{
          boxShadow: "none",
          bg: "#323438",
          color: "#ffffff",
          p: {
            color: "white",
          },
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function Calculator() {
  const [cashInput, setCashInput] = useState(1000);
  const [percent, setPercent] = useState(2);
  const [term, setTerm] = useState(1);
  const [termWord, setTermWord] = useState("дней");

  const options = dateArray;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "term",
    defaultValue: "15",
  });

  const group = getRootProps();

  const handleSliderChange = useCallback(
    (e: any) => {
      if (e >= 50000) {
        e = 50000;
      } else if (e > 50) {
        e -= 50;
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
    }
    setCashInput(e.target.value);
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
                paddingLeft={0}
                style={{ caretShape: "block" }}
                value={cashInput ?? 50}
                onChange={(e) => handleInputChange(e)}
                className={styles.money_input}
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
                height={"3"}
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
              <p onClick={() => setCashInput(50)} style={{ cursor: "pointer" }}>
                50 см.
              </p>
              <p
                onClick={() => setCashInput(25000)}
                style={{ cursor: "pointer" }}
              >
                25000 см.
              </p>
              <p
                onClick={() => setCashInput(50000)}
                style={{ cursor: "pointer" }}
              >
                50000 см.
              </p>
            </div>
          </div>
        </>
        <div className={styles.monthes}>
          <div className={styles.month_horizontal}>
            <label className={styles.input_label}>Срок кредита</label>

            <HStack {...group} className={styles.monthes_horizontal}>
              {dateArray.map((date, idx) => {
                let count = date.count.toString();
                const radio = getRadioProps({ count });
                return (
                  <RadioCard
                    key={idx}
                    value={count}
                    isChecked={true}
                    {...radio}
                    onChange={() =>
                      date.count === 15
                        ? radioHandleChange(date.percent, 1, date.word)
                        : radioHandleChange(date.percent, date.count, date.word)
                    }
                  >
                    <p>{date.count}</p>
                    <p>{date.percent < 3 ? "дней" : "мес."}</p>
                  </RadioCard>
                );
              })}
            </HStack>
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
            <h2>
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

// <Radio
//   colorScheme={"none"}
//   key={idx}
//   defaultChecked={date.count === 15}
//   value={date.count.toString()}
//   variant={"ZodString"}
//   _checked={{ backgroundColor: "red" }}
//   _active={{}}
//   __css={{}}
//   _focus={{ outline: "none", boxShadow: "none" }}
//   onChange={() =>
//     radioHandleChange(date.percent, date.count, date.word)
//   }
// >
