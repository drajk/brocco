import React from "react";
import styled from "styled-components";

import Text from "./Text";
import theme from "./theme";

const MARGIN_TOP = "70px";

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
  padding: ${theme.SPACING.large};
  background: ${theme.COLOR.white};
  border-radius: ${theme.SPACING.small};
  position: relative;
  transition: all 100ms ease-in-out;

  @media ${theme.BREAKPOINT.tablet} {
    margin: ${MARGIN_TOP} auto;
    width: 30%;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 15px;
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
