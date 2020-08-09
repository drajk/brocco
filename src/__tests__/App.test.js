import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  it("should render with app name and invitation link", () => {
    // arrange and act
    const { getAllByText } = render(<App />);

    // assert
    expect(getAllByText(/Broccoli & Co./i)).toHaveLength(2);

    // TODO: change to a test-id check as testing with text is very fragile
    expect(getAllByText('Request an invite')).toHaveLength(1);
  });
});
