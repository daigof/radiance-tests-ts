import React from "react";
import DialogModalExamples from "./components/dialogModal";
// import Modals from "./components/modals";
// import RadianceComp from "./components/radianceComp";
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
      {/* <RadianceComp /> */}
      {/* <Modals /> */}
      <DialogModalExamples />
    </div>
  );
};

export default App;
