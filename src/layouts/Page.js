import React from "react";
import styled from "styled-components";

import { Heart, Text, theme } from "../components";

const PAGE_SPACING = "15px 30px";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  padding: ${PAGE_SPACING};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledBody = styled.main`
  padding: ${PAGE_SPACING};
  background-color: ${theme.COLOR.grey_t07};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFooter = styled.footer`
  padding: ${PAGE_SPACING};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Page = ({ title, children }) => (
  <StyledContainer>
    {title && (
      <StyledHeader data-testid="page-header">
        <Text heading uppercase>
          {title}
        </Text>
      </StyledHeader>
    )}
    <StyledBody>{children}</StyledBody>
    {title && (
      <StyledFooter data-testid="page-footer">
        <Text>
          Made with <Heart /> in Melbourne.
        </Text>
        <Text>{`© ${new Date().getFullYear()} ${title} All rights reserved.`}</Text>
      </StyledFooter>
    )}
  </StyledContainer>
);

Page.Body = StyledBody;

export default Page;
