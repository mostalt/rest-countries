export const sizes = {
  mobile: "568px",
  tablet: "768px",
  desktop: "1440px",
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
