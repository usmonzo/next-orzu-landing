"use client";
import styled from "@emotion/styled";

interface Props {
  margin?: string;
  text?: string;
  onClick?: any;
  alignSelf?: any;
}

export const WhiteButtonContainer = styled.button<Props>`
  padding: 20px 40px;
  max-width: 339px;
  width: 100%;
  background: #ffffff;
  border-radius: 50px;
  z-index: 2;
  align-self: ${(props: Props) => props.alignSelf};
  margin: ${(props: Props) => props.margin};

  p {
    font-family: "Golos", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #16191d;
  }

  @media screen and (max-width: 500px) {
    padding: 16px 36px;
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 16px 20px;
  }
`;
const WhiteButton = (props: Props) => {
  return (
    <WhiteButtonContainer
      onClick={props.onClick}
      alignSelf={props.alignSelf}
      margin={props.margin}
    >
      <p>{props.text}</p>
    </WhiteButtonContainer>
  );
};

export default WhiteButton;
