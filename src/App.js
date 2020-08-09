import React from "react";

import { Page } from "./layouts";
import { Card } from "./components";

const App = () => (
  <Page title="Broccoli & Co.">
    <Card
      title="A better way to enjoy every day."
      subTitle="Be the first one to know when we launch"
      actionText="Request an invite"
      onAction={() => console.log('I am clicked!')}
    />
  </Page>
);

export default App;
