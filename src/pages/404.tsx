import React from "react";
import { Container } from "../components/shared/Container";
import { Inner } from "../components/shared/Inner";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default ({ location }: IndexPageProps) => {
  return (
    <Container pathName={location.pathname}>
      <Inner height="100%">Page not found</Inner>
    </Container>
  );
};
