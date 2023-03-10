import React, { ReactNode } from "react";
import { Head } from "./Head";
import {
  Box,
  CssBaseline,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { theme } from "../../styles/theme";

interface Props {
  title?: string;
  description?: string;
  pathName: string;
  className?: string;
  children?: ReactNode;
}

const Inner = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = React.forwardRef(
  ({ title, description, pathName, children, className }: Props, ref: any) => (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <Head title={title} description={description} pathName={pathName} />
      <Inner className={className} ref={ref}>
        {children}
      </Inner>
    </ThemeProvider>
  )
);
