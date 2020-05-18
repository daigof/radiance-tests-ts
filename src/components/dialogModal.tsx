import React, { useState } from "react";
import { DialogModal, Button } from "radiance-ui";

const DialogModalExamples = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{ marginTop: 200 }}>
      {/* DEFAULT MODAL */}
      <Button onClick={(): void => setOpenModal(true)}>Open modal</Button>
      {openModal && (
        <DialogModal title="Heads up!">
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <Button.Container>
            <Button isFullWidth onClick={(): void => setOpenModal(false)}>
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={(): void => setOpenModal(false)}
              buttonType="tertiary"
            >
              never mind
            </Button>
          </Button.Container>
        </DialogModal>
      )}
    </div>
  );
};

export default DialogModalExamples;
