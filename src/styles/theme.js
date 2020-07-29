import chroma from "chroma-js";
import gray from "gray-percentage";
import * as T from "@utils/typography";

import "@styles/fonts.css";

// NOTE(dabrady) Leveraging Chroma here to unify color 'type' specifications.
const palette = {
  black: chroma("#000").css(),
  white: chroma("#fff").css(),
  red: chroma("#933").css(),
  charcoal: chroma("#282828").css(),
  softGray: chroma("#9b9b9b").css(),
  icyBlue: chroma("#00b7ff").css(),
  softWhite: chroma(gray(90, 0, true)).css(),
  dirtySnow: chroma(gray(73, 0, true)).css()
};

/**
   I'm using Theme UI.
   @see https://theme-ui.com/theme-spec
 */
export default {
  /** Theme UI configuration */
  // @see https://theme-ui.com/theming#configuration-flags

  // THIS PAGE LEFT INTENTIONALLY BLANK

  /** Custom attributes **/

  baseline: T.BASELINE,
  scaleRatio: T.SCALE_RATIO,

  /** Theme Specification **/

  fonts: {
    body: "concourse-text, sans-serif",
    heading: "concourse-text, serif",
    // heading: "advocate-c43",
    title: "advocate-c43, serif",
    monospace: "triplicate-text, monospace",
    code: "triplicate-code, monospace"
  },
  fontWeights: {
    body: "normal",
    heading: "bolder",
    bold: "bold"
  },

  lineHeights: {
    body: T.LINE_HEIGHTS[0],
    heading: T.LINE_HEIGHTS[1]
  },
  letterSpacings: {},

  /**
     Key         Description
     -----------------------
     text        Body foreground color
     background  Body background color
     primary     Primary brand color for links, buttons, etc.
     secondary   A secondary brand color for alternative styling
     accent      A contrast color for emphasizing UI
     highlight   A background color for highlighting text
     muted       A faint color for backgrounds, borders, and accents
                 that do not require high contrast with the background color
  */
  colors: {
    ...palette,

    text: palette.black,
    background: palette.softWhite,
    // primary,
    // secondary,
    accent: palette.red,
    // highlight,
    bright: palette.black,
    muted: chroma(palette.red)
      .brighten()
      .alpha(0.07)
      .css(),
    modes: {
      dark: {
        text: palette.softGray,
        background: chroma(palette.black)
          .brighten(0.3)
          .css(),
        // primary,
        // secondary,
        accent: palette.icyBlue,
        // highlight,
        bright: palette.white,
        muted: chroma(palette.icyBlue)
          .brighten()
          .alpha(0.2)
          .css()
      }
    }
  },

  /* For styling MDX content */
  breakpoints: ["40rem", "42rem", "56rem"],
  // fontSizes: T.FONT_SIZES,
  fontSizes: ["1rem", "2.2rem", "4rem", "4.4rem", "5rem"],
  space: T.SPACES,
  styles: {},

  sizes: {
    container: "85vw",
    icon: [40, 60, 80]
  },

  /** Variants */

  text: {
    default: {
      color: "text",
      fontFamily: "body",
      lineHeight: "body",
      fontSize: 1
    },
    heading: {
      color: "text",
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [1, 2]
    },
    wishlistValue: {
      color: "text",
      fontFamily: "title",
      fontSize: 0,

      // Trying to center it within the donut
      position: "absolute",
      top: ({ lineHeights }) => `calc(50% - ${lineHeights.heading}rem + 4px)`,
      width: "100%",
      textAlign: "center"
    }
  },

  layout: {
    container: {
      maxWidth: ["85vw"],
      maxHeight: ["100vh"],
      margin: ["1rem auto", "1.2rem auto", "2.86rem auto", "4.93rem auto"]
    }
  },

  progress: {
    default: {
      color: "accent",
      display: "inline-block"

      /* Playing with SVG animation */
      // "circle[stroke-dasharray]": {
      //   strokeDasharray: 100,
      //   animation: "dash 5s linear",
      //   "@keyframes dash": {
      //     to: {
      //       strokeDashoffset: 1000
      //     }
      //   }
      // }
    }
  },

  stripe: {
    color: "bright",
    fontFamily: "body",
    fontWeight: "body",
    fontSize: "16px", // Need to specify absolute size because Stripe :P
    fontSmoothing: "antialiased",
    lineHeight: "body",

    "::placeholder": {
      color: ({ colors }) => {
        return chroma(colors.text)
          .alpha(0.5)
          .css();
      }
    }
  },

  buttons: {
    disabled: {
      fontFamily: "title",
      fontWeight: "body",
      fontFeatureSettings: "'c2sc'",
      lineHeight: "body",
      backgroundColor: "muted",
      color: "text",
      margin: "25px auto"
    },
    primary: {
      fontFamily: "title",
      fontWeight: "body",
      lineHeight: "body",
      backgroundColor: "accent",
      color: "background",
      fontFeatureSettings: "'c2sc'",
      margin: "25px auto"
    },
    secondary: {
      fontFamily: "title",
      fontWeight: "body",
      lineHeight: "body",
      backgroundColor: "muted",
      color: "accent",
      fontFeatureSettings: "'c2sc'",
      margin: "25px auto"
    }
  },

  links: {
    local: {
      color: "text",
      cursor: "pointer",
      textTransform: "lowercase",
      fontFamily: function smallCapsVariant({ fonts: { body } }) {
        var [intendedFont, ...fallbacks] = body.split(", ");
        return `${intendedFont.replace("-text", "-caps")}, ${fallbacks}`;
      },
      fontFeatureSettings: "'c2sc'",
      // letterSpacing: "0.1em",
      backgroundImage: null,
      textShadow: null,
      ":hover": {
        backgroundColor: "muted",
        color: "bright",
        transitionProperty: "background, color",
        transitionDuration: "0.2s",
        borderRadius: "8px"
      }
    },
    external: {
      color: "text",
      cursor: "pointer",
      backgroundImage: null,
      textShadow: null,
      // Cloning link style from pracicaltypography.com
      "::after": {
        content: "'°'",
        marginLeft: "0.1em",
        top: "-0.1em",
        fontSize: "90%",
        color: "accent"
      },
      ":hover": {
        backgroundColor: "muted",
        color: "bright",
        transitionProperty: "background, color",
        transitionDuration: "0.2s",
        borderRadius: "8px"
      }
    }
  }
};
