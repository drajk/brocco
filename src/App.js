import React, { useState } from "react";

import { Page } from "./layouts";
import { Card, Modal } from "./components";

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Page title="Broccoli & Co.">
        <Card
          title="A better way to enjoy every day."
          subTitle="Be the first one to know when we launch"
          actionText="Request an invite"
          onAction={() => setModalVisible(true)}
        />
      </Page>
      {isModalVisible && (
        <Modal title="Request an invite" onClose={() => setModalVisible(false)}>
          <p>Modal Contant</p>
        </Modal>
      )}
    </>
  );
};

export default App;
