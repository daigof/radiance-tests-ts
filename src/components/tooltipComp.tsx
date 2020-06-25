import React from "react";
import { Tooltip } from "radiance-ui";
import { css } from "@emotion/core";

const TooltipComp: React.FC = () => {
  return (
    <div
      css={css`
        margin: 50px;
      `}
    >
      <Tooltip content="Tooltip Content goes here" defaultOpen>
        Hover or Click here to trigger the Tooltip with default values
      </Tooltip>
    </div>
  );
};

export default TooltipComp;
