import React, { useState } from "react";

import { Modal, Text, theme } from "../../components";

import InviteForm from "./InviteForm";
import Success from "./Success";

import subscribeUser from "./utils/subscribeUser";

export default ({ onClose = () => {} }) => {
  const formRef = React.createRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data) => {
    setError(null);
    setLoading(true);

    const { fullname: name, email } = data;

    const { error } = await subscribeUser({ name, email });

    if (error) {
      setError(error);
      setLoading(false);

      return;
    }

    setSuccess(true);
  };

  return (
    <Modal
      title={success ? "All done!" : "Request an invite"}
      onClose={onClose}
    >
      {!success && (
        <InviteForm ref={formRef} isLoading={loading} onSubmit={handleSubmit} />
      )}
      {success && <Success onClose={onClose} />}

      {error && <Text color={theme.COLOR.error}>{error}</Text>}
    </Modal>
  );
};
