import React, { useState } from "react";

import { Page, InviteForm } from "./layouts";
import { Card } from "./components";

const App = () => {
  const [showInviteForm, setInviteFormVisibility] = useState(false);

  const formRef = React.createRef();

  const onSubmit = (data, e) => console.log(data, e);

  return (
    <>
      <Page title="Broccoli & Co.">
        <Card
          title="A better way to enjoy every day."
          subTitle="Be the first one to know when we launch"
          actionText="Request an invite"
          onAction={() => setInviteFormVisibility(true)}
        />
      </Page>
      {showInviteForm && (
        <InviteForm
          ref={formRef}
          onClose={() => setInviteFormVisibility(false)}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default App;
