import React, { useState } from "react";

import { Page, Invite } from "./layouts";
import { Card } from "./components";

const App = () => {
  const [showForm, setFormVisibility] = useState(false);

  return (
    <>
      <Page title="Broccoli & Co.">
        <Card
          title="A better way to enjoy every day."
          subTitle="Be the first one to know when we launch"
          actionText="Request an invite"
          onAction={() => setFormVisibility(true)}
        />
      </Page>
      {showForm && <Invite onClose={() => setFormVisibility(false)} />}
    </>
  );
};

export default App;
