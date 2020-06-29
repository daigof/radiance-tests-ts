/** @jsx jsx */
import React from "react";
import { LinkButton } from "radiance-ui";
import { jsx, css } from "@emotion/core";

const AccordionComp: React.FC = () => {
  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      <LinkButton.Container>
        <LinkButton
          onClick={() => console.log("asd")}
          buttonType="primary"
          textColor="red"
        >
          Click me
        </LinkButton>
        <LinkButton buttonType="secondary">s</LinkButton>
        <LinkButton buttonType="tertiary">Click me</LinkButton>
        <LinkButton buttonType="quaternary">Click me</LinkButton>
      </LinkButton.Container>
    </div>
  );
};

export default AccordionComp;
