import React from "react";

import { customButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <customButtonContainer {...props}>{children}</customButtonContainer>
);

export default CustomButton;
