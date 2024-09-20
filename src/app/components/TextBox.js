import styled from "styled-components";

export const TextBox = ({ type, placeholder, name }) => {
  return (
    <InputWrapper>
      <Input type={type} placeholder={placeholder} name={name} required />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 30px);
  transition: all 0.5s ease-in-out;
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
  background: #313a3e;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;
`;
