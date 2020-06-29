/** @jsx jsx */
import React from "react";
import { Button } from "radiance-ui";
import { jsx, css } from "@emotion/core";
// import { COLORS } from "radiance-ui/lib/constants";
import { CameraIcon } from "radiance-ui/lib/icons";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      <Button.Container flex>
        <Button
          buttonType="primary"
          icon={<CameraIcon />}
          isLoading
          textColor="red"
          isFullWidth
        >
          Click me
        </Button>
        <Button buttonType="secondary">s</Button>
        <Button buttonType="tertiary">Click me</Button>
        <Button buttonType="quaternary">Click me</Button>
      </Button.Container>
    </div>
  );
};

export default AccordionComp;
