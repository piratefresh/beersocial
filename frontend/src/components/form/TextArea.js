import styled from "styled-components";

const TextArea = styled.textarea`
  background: transparent;
  border: 2px solid rgb(223, 225, 230);
  border-radius: 3px;
  box-sizing: border-box;
  color: inherit;
  cursor: inherit;
  font-family: inherit;
  font-size: 16px;
  min-width: 0;
  outline: none;
  width: 100%;
  margin-top: 0.5em;
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  :active {
    border: 2px solid #ffbe0d;
  }
  :focus {
    border: 2px solid #ffbe0d;
  }

  &::-ms-clear {
    display: none;
  }

  &:invalid {
    box-shadow: none;
  }
`;

export default TextArea;
