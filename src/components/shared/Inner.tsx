import React from "react";
import { Stack, StackProps } from "@mui/material";

export const Inner: React.FC<StackProps> = ({
  children,
  className,
  ...props
}) => (
  <Stack
    className={className}
    width="100%"
    maxWidth="1000px"
    px="1rem"
    sx={{ margin: "0px auto" }}
    {...props}
  >
    {children}
  </Stack>
);
