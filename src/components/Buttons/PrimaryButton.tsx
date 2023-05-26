"use client";
import styled from "@emotion/styled";

interface Props {
  text: string;
  aligned?: any;
  justify?: any;
  onClick?: Function;
}
interface IComponent {
  justifySelf: any;
  align: any;
}
export const PrimaryButtonContainer = styled.button<IComponent>`
  padding: 17px 30px;
  gap: 12px;
  border-radius: 50px;
  background-color: #ff6200;
  border: none;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  z-index: 2;
  align-self: ${(props: any) => props.align || ""};
  justify-self: ${(props: any) => props.justifySelf || ""};

  @media screen and (max-width: 735px) {
    font-size: 1rem;
  }
`;
const PrimaryButton = (props: Props) => {
  return (
    <PrimaryButtonContainer align={props.aligned} justifySelf={props.justify}>
      {props.text}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
