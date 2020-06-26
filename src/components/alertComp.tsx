import React from "react";
import { Alert } from "radiance-ui";
import { css } from "@emotion/core";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 50px;
      `}
    >
      <Alert
        content="Default Alert: it will disappear after 3 seconds"
        duration={4}
      />
    </div>
  );
};

export default AccordionComp;
