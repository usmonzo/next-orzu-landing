import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import styles from "./Calculator.module.scss";
import { dateArray } from "@/data/_data";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        className={styles.month_container}
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "none",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function Example(props: any) {
  const options = dateArray;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Term",
    defaultValue: "1",
    onChange: (e) => console.log(e),
  });

  const group = getRootProps();

  return (
    //        <HStack {...group}>
    //            {options.map((value) => {
    //                const radio = getRadioProps({ value })
    //                return (
    //                    <RadioCard key={value} {...radio}>
    //                        {value}
    //                    </RadioCard>
    //                    )
    //            })}
    //        </HStack>
    <HStack {...group} className={styles.months_horizontal} defaultValue={"1"}>
      {options.map((date, idx) => {
        const radio = getRadioProps({ date });
        return (
          <RadioCard
            key={idx}
            value={date.value}
            {...radio}
            onChange={() =>
              date.count === 15
                ? props.radioHandleChange(date.percent, 1, date.word)
                : props.radioHandleChange(date.percent, date.count, date.word)
            }
          >
            <p>{date.count}</p>
            <p>{date.percent < 3 ? "дней" : "мес."}</p>
          </RadioCard>
        );
      })}
    </HStack>
  );
}
