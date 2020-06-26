import React from "react";
import { Banner } from "radiance-ui";
import { css } from "@emotion/core";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 50px;
      `}
    >
      <Banner
        content={
          <React.Fragment>
            <strong>Error Banner:</strong> This is the banner content
          </React.Fragment>
        }
        type="error"
      />
    </div>
  );
};

export default AccordionComp;
