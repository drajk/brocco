import React from "react";
import styled from "styled-components";

import Text from "./Text";
import theme from "./theme";

const FORM_OFFSET = "70px";
const CONTENT_OFFSET = "20px";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 100ms;
`;

const Content = styled.div`
  padding: ${CONTENT_OFFSET} ${theme.SPACING.large};
  background: ${theme.COLOR.white};
  border-radius: ${theme.SPACING.small};
  position: relative;
  margin: 0 auto;
  transition: all 100ms ease-in-out;

  @media ${theme.BREAKPOINT.tablet} {
    margin: ${FORM_OFFSET} auto;
    width: 30%;
  }
`;

const Close = styled.div`
  position: absolute;
  top: calc(${CONTENT_OFFSET} + 8px);
  right: 20px;
  transition: all 100ms;
  font-size: ${theme.FONT_SIZE.heading};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${theme.COLOR.hover};
  }
`;

const Body = styled.div`
  height: 100vh;
  overflow: none;

  margin: ${theme.SPACING.very_large} 0;

  @media ${theme.BREAKPOINT.tablet} {
    height: 30%;
    max-height: 30%;
    overflow: auto;
  }
`;

const Modal = ({ title, children, onClose = () => {} }) => (
  <Overlay>
    <Content>
      <Text heading>{title}</Text>
      <Close onClick={onClose}>x</Close>
      <Body>{children}</Body>
    </Content>
  </Overlay>
);

export default Modal;
