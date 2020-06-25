import React, { useState } from "react";
import { Checkbox } from "radiance-ui";
import { css } from "@emotion/core";

const CheckboxComp: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div
      css={css`
        padding: 50px;
      `}
    >
      <Checkbox
        type="primary"
        checked={isChecked}
        icon={null}
        size="small"
        onClick={() => setIsChecked(!isChecked)}
      >
        This is a primary checkbox
      </Checkbox>
    </div>
  );
};

export default CheckboxComp;
