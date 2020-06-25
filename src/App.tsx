import React from "react";
import ConstantsComp from "./components/constantsComp";
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
      <ConstantsComp />
      {/* <AccordionComp />
      <CheckboxComp />
      <DialogModalComp />
      <ImmersiveModalComp />
      <TooltipComp /> */}
    </div>
  );
};

export default App;
