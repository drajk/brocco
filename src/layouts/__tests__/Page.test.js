import React from "react";
import { render } from "@testing-library/react";

import Page from "../Page";

const getWrapper = (title) => render(<Page title={title} />);

describe("<Page />", () => {
  it("should not show header and footer without title", () => {
    // arrange and act
    const { queryAllByTestId } = getWrapper(null);

    // assert
    expect(queryAllByTestId("page-header")).toHaveLength(0);
    expect(queryAllByTestId("page-footer")).toHaveLength(0);
  });

  it("should show header and footer with title", () => {
    // arrange and act
    const { queryAllByTestId, getAllByText } = getWrapper("some title");

    expect(queryAllByTestId("page-header")).toHaveLength(1);
    expect(queryAllByTestId("page-footer")).toHaveLength(1);

    // assert
    expect(getAllByText(/some title/i)).toHaveLength(2);
  });
});
