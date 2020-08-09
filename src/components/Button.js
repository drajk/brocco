import React from "react";
import styled from "styled-components";

import Text from "./Text";
import theme from './theme';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: ${theme.SPACING.small};
  width: auto;
  min-width: 150px;
  padding: ${theme.SPACING.large} 20px;
  background: ${theme.COLOR.primary};
  border: 1px solid ${theme.COLOR.black};
  color: ${theme.COLOR.white};
  text-transform: uppercase;

  &:hover {
    background: ${theme.COLOR.hover};
  }
`;

const Button = ({ children, onClick = () => {} }) => (
  <StyledContainer onClick={onClick}>
    <Text>{children}</Text>
  </StyledContainer>
);

export default Button;
