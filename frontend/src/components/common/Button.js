import styled from "styled-components";

const BaseButton = styled.button`
  background: #fff;
  border-radius: 5px;
  padding: 0.5em 1em;
  align-self: center;
  border: none;
  :focus {
    outline: none;
  }
`;

export default BaseButton;

export const PrimaryButtonForm = styled(BaseButton)`
  background: ${props => props.theme.colors.yellow};
`;
export const SecondaryButtonForm = styled(BaseButton)`
  border: 1px solid #777;
`;
export const TabSecondary = styled(BaseButton)`
  border: 1px solid #777;
  border-radius: 20px;
`;
