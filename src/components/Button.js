import React from "react";
import styled from "styled-components";

import Text from "./Text";
import theme from './theme';

const StyledContainer = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: ${theme.SPACING.small};
  width: auto;
  padding: 12px 20px;
  border: 1px solid ${theme.COLOR.black};

  &:hover {
    background: ${theme.COLOR.white};
  }
`;

const Button = ({ children, onClick = () => {} }) => (
  <StyledContainer onClick={onClick}>
    <Text>{children}</Text>
  </StyledContainer>
);

export default Button;
