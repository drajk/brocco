const SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

const BREAKPOINT = {
  mobile: `(min-width: ${SIZE.mobile})`,
  tablet: `(min-width: ${SIZE.tablet})`,
  laptop: `(min-width: ${SIZE.laptop})`,
  desktop: `(min-width: ${SIZE.desktop})`,
};

const FONT_SIZE = {
  body: "14px",
  heading: "24px",
  hero: "48px",
};

const COLOR = {
  white: "#fff",
  black: "#000",
  grey_t03: "#f8f8f8",
  grey_t07: "#ececec",
};

const SPACING = {
  small: "4px",
  medium: "8px",
  large: "12px",
};

// TODO: create a ThemeProvider and accept configurable styles.
module.exports = {
  BREAKPOINT,
  FONT_SIZE,
  COLOR,
  SPACING,
};
