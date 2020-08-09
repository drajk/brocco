import React from "react";
import styled, { css } from "styled-components";

import Text from "./Text";
import theme from "./theme";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: ${theme.SPACING.small};
  width: auto;
  min-width: 150px;
  padding: ${theme.SPACING.large} 20px;
  border: 1px solid ${theme.COLOR.black};
  text-transform: uppercase;

  ${(props) =>
    !props.isLoading &&
    css`
      background: ${theme.COLOR.primary};
      color: ${theme.COLOR.white};

      &:hover {
        background: ${theme.COLOR.hover};
      }
    `}
`;

const Button = ({ text, isLoading, loadingText, onClick = () => {} }) => (
  <StyledContainer isLoading={isLoading} onClick={onClick}>
    {!isLoading && <Text>{text}</Text>}
    {isLoading && <Text>{loadingText || "loading.."}</Text>}
  </StyledContainer>
);

export default Button;
