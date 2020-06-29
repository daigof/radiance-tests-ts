/** @jsx jsx */
import React from "react";
import { Button, RoundButton } from "radiance-ui";
import { jsx, css } from "@emotion/core";
import { COLORS } from "radiance-ui/lib/constants";
import { CameraIcon } from "radiance-ui/lib/icons";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      <Button.Container flex>
        <RoundButton
          icon={<CameraIcon />}
          disabled
          onClick={() => console.log("asd")}
          textColor={COLORS.accent}
        >
          Click me
        </RoundButton>
        <RoundButton icon={<CameraIcon />} buttonType="secondary">
          s
        </RoundButton>
        <RoundButton icon={<CameraIcon />} buttonType="tertiary">
          Click me
        </RoundButton>
        <RoundButton icon={<CameraIcon />} buttonType="quaternary">
          Click me
        </RoundButton>
        <RoundButton icon={<CameraIcon />} buttonType="action">
          Click me
        </RoundButton>
      </Button.Container>
    </div>
  );
};

export default AccordionComp;
