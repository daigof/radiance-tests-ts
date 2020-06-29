import React from "react";
// import ConstantsComp from "./components/constantsComp";
// import RoundButtonComp from "./components/roundButtonComp";
import LinkButtonComp from "./components/linkButtonComp";
// import TextButtonComp from "./components/textButtonComp";
// import ButtonComp from "./components/buttonComp";
// import AccordionComp from "./components/accordionComp";
// import CheckboxComp from "./components/checkboxComp";
// import DialogModalComp from "./components/dialogModalComp";
// import ImmersiveModalComp from "./components/immersiveModalComp";
// import TooltipComp from "./components/tooltipComp";
import { Global } from "@emotion/core";

import {
  brandStyles,
  resetStyles,
} from "radiance-ui/lib/utils/injectGlobalStyles/style";

const App: React.FC = () => {
  return (
    <div>
      <Global styles={resetStyles} />
      <Global styles={brandStyles} />
      {/* <ConstantsComp /> */}
      <LinkButtonComp />
      {/* <TextButtonComp /> */}
      {/* <RoundButtonComp /> */}
      {/* <ButtonComp /> */}
      {/* <AccordionComp />
      <CheckboxComp />
      <DialogModalComp />
      <ImmersiveModalComp />
      <TooltipComp /> */}
    </div>
  );
};

export default App;
