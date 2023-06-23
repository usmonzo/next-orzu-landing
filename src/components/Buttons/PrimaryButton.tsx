"use client";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  aligned?: any;
  justify?: any;
  onClick?: any;
  zIndex?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  padding?: string;
}
interface IComponent {
  justifySelf: any;
  align: any;
  zIndex?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: any;
  padding?: string;
}
const buttonProps = {
  color: "#323438",
  borderRadius: "16px",
  fontSize: "1.2rem",
  fontWeight: "800",
  size: "lg",
  border: "1px solid transparent",
  // focusBorderColor: "transparent",
  // zIndex: 1,
};
export const PrimaryButtonContainer = styled(Button)<IComponent>`
  cursor: pointer;
  padding: ${(props: IComponent) => props.padding || "17px 30px"};
  border-radius: 50px;
  background: #ff6200 !important;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  z-index: ${(props: any) => props.zIndex || 1};
  align-self: ${(props: any) => props.align || ""};
  justify-self: ${(props: any) => props.justifySelf || ""};

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;
const PrimaryButton = (props: Props) => {
  return (
    <PrimaryButtonContainer
      align={props.aligned}
      justifySelf={props.justify}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      onClick={props.onClick}
      padding={props.padding}
      zIndex={props.zIndex}
      {...buttonProps}
    >
      {props.text}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
