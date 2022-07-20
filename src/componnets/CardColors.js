export const CardColors = (color, type) => {
  let defaultColorLight = "#F3EDFE";
  let defaultColorDark = "#E7DBFC";

  if (color in colorsList) {
    let objColor = colorsList[color];
    if (type in objColor) {
      return objColor[type];
    }
  }

  if (type == "light") {
    return defaultColorLight;
  }
  return defaultColorDark;
};

const colorsList = {
  fff0c5: {
    light: "#FFF7DA",
    dark: "#f7cc28",
  },
  c9dcff: {
    light: "#DDF5FC",
    dark: "#ABE5F8",
  },
  d4ffd2: {
    light: "#C2E8D2",
    dark: "#7cbf99",
  },
  f2c5e7: {
    light: "#F7E7FA",
    dark: "#EBC3F3",
  },
  e7e7e7: {
    light: "#E4E6E9",
    dark: "#C7CED2",
  },
  ffc698: {
    light: "#FFE6CC",
    dark: "#FFC180",
  },
  d298ff: {
    light: "#E7DBFC",
    dark: "#B199DE",
  },
  ff9292: {
    light: "#FBDDDD",
    dark: "#F5ABAB",
  },
};
