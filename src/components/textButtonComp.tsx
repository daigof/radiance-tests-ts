/** @jsx jsx */
import React from "react";
import { Button, TextButton } from "radiance-ui";
import { jsx, css } from "@emotion/core";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      <Button.Container flex>
        <TextButton onClick={() => console.log("asd")}>Click me</TextButton>
        <TextButton disabled>Click me</TextButton>
      </Button.Container>
    </div>
  );
};

export default AccordionComp;
