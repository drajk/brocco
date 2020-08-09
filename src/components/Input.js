import React from "react";
import styled, { css } from "styled-components";

import Text from "./Text";
import theme from "./theme";

const StyledInput = styled.input`
  margin: ${theme.SPACING.small} 0;
  padding: ${theme.SPACING.large};
  border-radius: ${theme.SPACING.small};
  border: 1px solid ${theme.COLOR.grey_t70};

  ${(props) =>
    props.error &&
    css`
      border-color: ${theme.COLOR.error};
      background: ${theme.COLOR.error_background};
    `}

  width: 90%;
  ::placeholder {
    color: ${theme.COLOR.grey_t30};
    text-transform: uppercase;
  }
`;

const Input = React.forwardRef(({ error, required, label, ...props }, ref) => (
  <>
    <StyledInput {...props} ref={ref} error={error} />
    <Text color={theme.COLOR.error}>{error && error.message}</Text>
  </>
));

export default Input;
