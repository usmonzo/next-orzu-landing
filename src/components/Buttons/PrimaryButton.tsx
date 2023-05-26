"use client";
import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  aligned?: string;
  justify?: string;
  onClick?: Function;
}

const PrimaryButton = (props: Props) => {
  return (
    <Button
      style={{
        padding: "17px 30px",
        gap: "12px",
        background: "#ff6200",
        borderRadius: "50px",
        border: "none",
        fontWeight: "500",
        fontSize: "1.2rem",
        lineHeight: "20px",
        textAlign: "center",
        color: "#ffffff",
        alignSelf: `${props.aligned}`,
        justifySelf: `${props.justify}`,
        zIndex: 2,
      }}
      p={"17px 30px"}
      h={"40px"}
    >
      {props.text}
    </Button>
  );
};

export default PrimaryButton;
