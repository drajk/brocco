import React from "react";
import { render } from "@testing-library/react";

import Page from "../Page";

const getWrapper = (title) => render(<Page title={title} />);

describe("<Page />", () => {
  it("should not show header and footer without title", () => {
    const { queryAllByTestId } = getWrapper(null);

    expect(queryAllByTestId("page-header")).toHaveLength(0);
    expect(queryAllByTestId("page-footer")).toHaveLength(0);
  });
});
