import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Inner } from "../../shared/Inner";

import Logo from "../../../assets/svg/logo.svg";

export const About: React.FC = () => (
  <Box bgcolor={(theme) => theme.palette.background.default} height="100vh">
    <Inner spacing={"3rem"} alignItems="center" height="100%" maxWidth="38rem">
      <Stack
        width="100%"
        alignItems="flex-start"
        borderBottom={(theme) => `1px solid ${theme.palette.divider}`}
        pt={"2rem"}
        pb={"1rem"}
        sx={{ svg: { width: "auto" } }}
      >
        <Logo height="3.5rem" width="auto" />
      </Stack>
      <Stack spacing="2rem">
        <Typography
          variant="h1"
          fontWeight={600}
          fontSize="1.5rem"
          lineHeight="2.125rem"
          maxWidth={{ xs: "100%", sm: "80%" }}
        >
          Variety Labs provides software development and advisory services
        </Typography>
        <Stack spacing="1rem" direction={{ xs: "column" }} maxWidth="38rem">
          <Typography color={(theme) => theme.palette.text.secondary}>
            We turn your ideas from proof-of-concept into production-ready
            applications. Using the latest technologies, we deliver
            high-quality, scalable software solutions, including iOS apps and
            web apps, tailored to your needs.
          </Typography>
          <Typography color={(theme) => theme.palette.text.secondary}>
            Additionally, our consultancy services guide you from ideation to
            implementation. We offer insights and advice on both technical
            aspects like engineering and security, in addition to operational
            support.
          </Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        href="mailto:contact@varietylabs.xyz"
        sx={{ height: "3rem", fontWeight: 600 }}
        color="secondary"
        fullWidth
      >
        Get in touch
      </Button>
    </Inner>
  </Box>
);
