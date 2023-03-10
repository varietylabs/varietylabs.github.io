import React from "react";
import { styled } from "@mui/material";
import { Container } from "../components/shared/Container";
import { About } from "../components/pages/Home/About";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  position: "relative",
  background: theme.palette.background.default,
}));

const IndexPage = () => (
  <StyledContainer
    title="Variety Labs"
    description="Software development made easy"
    pathName="/"
  >
    <About />
  </StyledContainer>
);

export default IndexPage;
