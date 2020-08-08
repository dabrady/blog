import React from "react";
/** @jsx jsx */
import { Box, Heading, useColorMode, jsx } from "theme-ui";

import MainLayout from "@components/MainLayout";
// import SEO from "@components/SEO.jsx";
import {
  IconGithub,
  IconDev,
  IconInstagram,
  IconLinkedIn
} from "@components/Icons";
import useThemeToggle from "@utils/hooks/useThemeToggle";

export default function Home() {
  var toggleTheme = useThemeToggle();

  return (
    <MainLayout>
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          overflow: "hidden"
        }}
      >
        <Heading
          as="h1"
          sx={{
            fontSize: ["0.8rem", 0],
            fontFamily: "monospace",
            fontWeight: "normal",
            fontFeatureSettings: "'ss01'",
            lineHeight: 2.4,
            color: "accent",
            marginLeft: ["1.8px", 1]
          }}
        >
          Hi, my name is
        </Heading>
        <Heading
          sx={{
            fontSize: [1, 2, 3, 4],
            lineHeight: 1.1,
            color: "bright"
          }}
        >
          Daniel Brady.
        </Heading>
        <Heading
          as="h3"
          sx={{
            fontSize: [1, 2, 3, 4],
            lineHeight: 1.1,
            fontWeight: "normal"
          }}
        >
          I build better software
          {/* NOTE(dabrady) Secret theme toggle */}
          <span
            sx={{
              cursor: "pointer",
              ":hover": {
                color: "accent",
                transitionProperty: "color",
                transitionDuration: "0.2s"
              }
            }}
            onClick={toggleTheme}
          >
            .
          </span>
        </Heading>

        <section
          sx={{
            marginTop: [5, 7]
          }}
        >
          <IconGithub />
          <IconDev />
          <IconLinkedIn />
          <IconInstagram />
        </section>
      </Box>
    </MainLayout>
  );
}
