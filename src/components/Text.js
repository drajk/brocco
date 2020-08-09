import styled, { css } from "styled-components";
import theme from "./theme";

const Text = styled.p`
  margin: ${theme.SPACING.medium};
  font-size: ${theme.FONT_SIZE.body};
  text-align: center;

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${(props) =>
    props.heading &&
    css`
      font-size: ${theme.FONT_SIZE.heading};
    `};

  ${(props) =>
    props.hero &&
    css`
      font-size: ${theme.FONT_SIZE.hero};
    `};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export default Text;
