import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = ({ children, ...props }) => (
  <Button variant="contained" {...props}>
    {children}
  </Button>
);

export default CustomButton;
