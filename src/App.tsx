import React from "react";
import ConstantsComp from "./components/constantsComp";
import TooltipComp from "./components/tooltipComp";
// import AccordionComp from "./components/accordionComp";
// import RoundButtonComp from "./components/roundButtonComp";
// import LinkButtonComp from "./components/linkButtonComp";
// import TextButtonComp from "./components/textButtonComp";
// import ButtonComp from "./components/buttonComp";
// import CheckboxComp from "./components/checkboxComp";
// import DialogModalComp from "./components/dialogModalComp";
// import ImmersiveModalComp from "./components/immersiveModalComp";
import { Global } from "@emotion/core";

import {
  brandStyles,
  resetStyles,
} from "radiance-ui/lib/utils/injectGlobalStyles/style";
// import { primaryTheme, secondaryTheme } from "radiance-ui/lib/constants/themes";
// import { ThemeProvider } from "emotion-theming";

const App: React.FC = () => {
  // console.log(primaryTheme);
  return (
    <div>
      <Global styles={resetStyles} />
      <Global styles={brandStyles} />
      <ConstantsComp />
      <TooltipComp />
      {/* <LinkButtonComp /> */}
      {/* <TextButtonComp /> */}
      {/* <RoundButtonComp /> */}
      {/* <ButtonComp /> */}
      {/* <AccordionComp /> */}
      {/* <CheckboxComp />*/}
      {/* <DialogModalComp />*/}
      {/* <ImmersiveModalComp />*/}
    </div>
  );
};

export default App;
