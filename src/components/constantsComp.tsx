import React from "react";
import { SPACER, MEDIA_QUERIES, COLORS } from "radiance-ui/lib/constants";
import { css } from "@emotion/core";

const ConstantsComp: React.FC = () => {
  return (
    <div
      css={css`
        margin: 50px;
      `}
    >
      SPACER CONTENT IS: {SPACER.base}
      <br />
      MEDIAQUERY IS: {MEDIA_QUERIES.lgUp}
      <br />
      COLORS IS: {COLORS.primary}
      <br />
      COLOR DEPRECATED: {COLORS.purple60}
      <br />
    </div>
  );
};

export default ConstantsComp;
