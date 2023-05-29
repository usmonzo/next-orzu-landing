import styled from "@emotion/styled";

interface Props {
  text: string;
}
export const BlackButtonContainer = styled.button`
  align-self: flex-start;
  padding: 15px 30px;
  gap: 12px;
  background: #16191d;
  border-radius: 50px;
  color: #fff;
  font-weight: 500;
  font-size: 1.3rem;
  border: none;

  @media screen and (max-width: 735px) {
    font-size: 1rem;
    padding: 15px 25px;
  }
`;
const BlackButton = (props: Props) => {
  return <BlackButtonContainer>{props.text}</BlackButtonContainer>;
};

export default BlackButton;
