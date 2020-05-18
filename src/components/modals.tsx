import React, { useState } from "react";
import { ImmersiveModal, Button } from "radiance-ui";

import headerImage from "./headerImage.jpg";

const Modals = (): JSX.Element => {
  const [defaultIsOpen, setDefaultIsOpen] = useState(false);
  const [headerImageIsOpen, setheaderImageIsOpen] = useState(false);

  return (
    <div style={{ marginTop: 200 }}>
      {/* DEFAULT MODAL */}
      <Button onClick={(): void => setDefaultIsOpen(true)}>
        Open standard modal
      </Button>
      {defaultIsOpen && (
        <ImmersiveModal
          onClose={(): void => setDefaultIsOpen(false)}
          title="Immersive modal title"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
        </ImmersiveModal>
      )}
      <br />
      <br />
      {/* MODAL WITH HEADER */}
      <Button onClick={(): void => setheaderImageIsOpen(true)}>
        Open with image as header
      </Button>
      {headerImageIsOpen && (
        <ImmersiveModal
          onClose={(): void => setheaderImageIsOpen(false)}
          headerImage={<img src={headerImage} alt="header" />}
          title="With image as header"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis sequi perspiciatis hic asperiores nemo quaerat modi illo ad,
            quae, accusamus soluta tenetur, velit reiciendis blanditiis possimus
            animi ea officiis.
          </p>
        </ImmersiveModal>
      )}
    </div>
  );
};

export default Modals;
