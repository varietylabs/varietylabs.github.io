import React from "react";
import { Stack, styled, Typography, Box, Button } from "@mui/material";
import { Inner } from "../../shared/Inner";

import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import BusinessIcon from "@mui/icons-material/Business";
import Logo from "../../../assets/svg/logo.svg";

const Item = styled(Stack)`
  background: ${({ theme }) => theme.palette.card.light};
  border: 1px solid ${({ theme }) => theme.palette.card.main};
  padding: 1rem;
  height: 100%;
  width: 100%;
  border-radius: 0.75rem;

  ul {
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
`;

export const About: React.FC = () => (
  <Box bgcolor={(theme) => theme.palette.background.paper} height="100vh">
    <Inner
      pt={{ xs: "2rem", md: "8rem" }}
      pb={{ xs: "4rem", md: "6rem" }}
      spacing={"3rem"}
      alignItems="center"
      height="100%"
    >
      <Logo />
      <Stack spacing="2rem">
        <Stack spacing="1rem" direction={{ xs: "column" }} maxWidth="32rem">
          <Item>
            <Stack
              direction="row"
              spacing="1rem"
              alignItems="center"
              mb="0.5rem"
            >
              <DevicesOtherIcon sx={{ fontSize: "2rem" }} />
              <Typography variant="h6">
                Software Development Services
              </Typography>
            </Stack>
            <Typography color={(theme) => theme.palette.text.secondary}>
              Our team will take your app from proof-of-concept to a production
              ready application.
            </Typography>
          </Item>
          <Item>
            <Stack
              direction="row"
              spacing="1rem"
              alignItems="center"
              mb="0.5rem"
            >
              <BusinessIcon sx={{ fontSize: "2rem" }} />
              <Typography variant="h6">
                Startup Consultancy and Advisory
              </Typography>
            </Stack>
            <Typography color={(theme) => theme.palette.text.secondary}>
              We know what it takes to launch and grow a successful business and
              can guide you from ideation all the way through.
            </Typography>
          </Item>
        </Stack>
        <Button
          variant="contained"
          href="mailto:contact@varietylabs.xyz"
          sx={{ height: "3rem", maxWidth: "32rem" }}
          color="secondary"
          fullWidth
        >
          Get in touch
        </Button>
      </Stack>
    </Inner>
  </Box>
);
