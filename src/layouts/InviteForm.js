import React from "react";
import { useForm } from "react-hook-form";

import { Modal, Form, Input, Button } from "../components";

export default React.forwardRef(({ onSubmit, onClose }, ref) => {
  const { register, handleSubmit, getValues, errors } = useForm({});

  const submitForm = () => ref.current.dispatchEvent(new Event("submit"));

  return (
    <Modal title="Request an invite" onClose={onClose}>
      <Form role="form" ref={ref} onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="fullname"
          name="fullname"
          placeholder="Full name"
          required
          ref={register({
            required: "Enter full name",
            maxLength: 100,
            pattern: {
              value: /^.{3,}$/,
              message: "Enter valid full name",
            },
          })}
          error={errors.fullname}
        />

        <Input
          id="email"
          name="email"
          placeholder="Email"
          required
          ref={register({
            required: "Enter email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter valid email address",
            },
          })}
          error={errors.email}
        />

        <Input
          id="confirmEmail"
          name="confirmEmail"
          placeholder="Confirm email"
          required
          ref={register({
            validate: (value) => value === getValues("email") || 'Email and confirm email should be same',
          })}
          error={errors.confirmEmail}
        />

        <Button onClick={submitForm}>Send</Button>
      </Form>
    </Modal>
  );
});
