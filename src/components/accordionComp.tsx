import React from "react";
import { Accordion } from "radiance-ui";
import { NeckGlyph } from "radiance-ui/lib/icons";
import { SPACER, MEDIA_QUERIES } from "radiance-ui/lib/constants";
import { css } from "@emotion/core";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 50px;
      `}
    >
      <Accordion.Container>
        <Accordion
          isOpen
          onClick={() => undefined}
          title={<div>This is styled with div</div>}
        >
          <div>
            SPACER CONTENT IS: {SPACER.base}
            <br />
            MEDIAQUERY IS: {MEDIA_QUERIES.lgUp}
            <br />
            GLUYPHS IS: <NeckGlyph />
          </div>
        </Accordion>
      </Accordion.Container>
    </div>
  );
};

export default AccordionComp;
