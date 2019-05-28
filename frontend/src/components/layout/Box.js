import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  color,
  justifyContent,
  alignItems,
  flexDirection,
  boxShadow
} from "styled-system";

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${justifyContent}
  ${alignItems}
  ${flexDirection}
  ${boxShadow}
`;

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...justifyContent.propTypes,
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...flexDirection.propTypes
};
export default Box;
