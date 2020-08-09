import React from "react";
import styled from "styled-components";

import { Text, Button, theme } from "../../components";

const ButtonContainer = styled.div`
  margin-top: ${theme.SPACING.very_large};
`;

const Success = ({ onClose = () => {} }) => (
  <>
    <Text>
      You will be one of the first to experience Broccoli & Co. when we launch.
    </Text>

    <ButtonContainer>
      <Button text="Ok" onClick={onClose} />
    </ButtonContainer>
  </>
);

export default Success;
