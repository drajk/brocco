import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import InviteForm from "../InviteForm";

describe("<InviteForm />", () => {
  it("should validate required fields", async () => {
    const { getByRole, getByTestId } = render(<InviteForm />);

    await act(async () => {
      await fireEvent.submit(getByRole(/form/i));
    });

    const fields = ["fullname", "email"];

    fields.forEach((field) => {
      expect(getByTestId(`error-${field}`).innerHTML.length).toBeTruthy();
    });
  });

  it("should validate invalid fields", async () => {
    const { getByRole, getByTestId } = render(
      <InviteForm
        defaultValues={{
          fullname: "ss",
          email: "some invalid email",
        }}
      />
    );

    await act(async () => {
      await fireEvent.submit(getByRole(/form/i));
    });

    const fields = ["fullname", "email"];

    fields.forEach((field) => {
      expect(getByTestId(`error-${field}`).innerHTML.length).toBeTruthy();
    });
  });

  it("should validate confirm email when email is entered", async () => {
    const { getByRole, getByTestId } = render(
      <InviteForm
        defaultValues={{
          fullname: "ssss",
          email: "test@test.com",
          confirmEmail: "",
        }}
      />
    );

    await act(async () => {
      await fireEvent.submit(getByRole(/form/i));
    });

    expect(getByTestId("error-confirmEmail").innerHTML.length).toBeTruthy();
  });
});
