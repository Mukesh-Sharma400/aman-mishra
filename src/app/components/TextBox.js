import styled from "styled-components";

export const TextBox = ({ type, placeholder, name }) => {
  return (
    <InputWrapper>
      <Input type={type} placeholder={placeholder} name={name} required />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  transition: all 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin: -20px;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    background-color: #0f1c1e;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  padding: 10px 10px 10px 35px;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.globalColors.lightGreenColor
      : theme.globalColors.lightGreenColor};
  background-color: #7b7b8350;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;
`;
