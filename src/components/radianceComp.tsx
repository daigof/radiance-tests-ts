import React, { useState } from "react";
import { Accordion, Checkbox, Tooltip } from "radiance-ui";
import { NeckGlyph } from "radiance-ui/lib/icons";
import { SPACER, MEDIA_QUERIES } from "radiance-ui/lib/constants";
import { css } from "@emotion/core";

const RadianceComp: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);
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
      <br />
      <br />
      <br />
      <br />
      <Checkbox
        type="primary"
        checked={isChecked}
        icon={null}
        size="small"
        onClick={() => setIsChecked(!isChecked)}
      >
        This is a primary checkbox
      </Checkbox>
      <br />
      <br />
      <br />
      <br />
      <Tooltip content="Tooltip Content goes here" defaultOpen>
        Hover or Click here to trigger the Tooltip with default values
      </Tooltip>
    </div>
  );
};

export default RadianceComp;
