import { Avatar, Image } from "antd";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import avatar from "../images/avatar.jpg";

const colorPalette = [
  {
    background: "#FFE0BF",
    text: "#FF8400",
  },

  {
    background: "#C3DEED",
    text: "#0E7AB7",
  },
  {
    background: "#F5E1F9",
    text: "#D687E6",
  },
  {
    background: "#D1E9F1",
    text: "#48A8C7",
  },
  {
    background: "#FAD5D5",
    text: "#EB5757",
  },
  {
    background: "#DBF3E5",
    text: "#6FCF97",
  },
  {
    background: "#BFE2FF",
    text: "#008DFF",
  },
  {
    background: "#DFDFE1",
    text: "#817F87",
  },
  {
    background: "#FCF1D2",
    text: "#F2C94C",
  },
  {
    background: "#D5F2FC",
    text: "#56CCF2",
  },
];

const getColorPaletteByName = (name) => {
  const defaultColors = {
    background: "#BFE2FF",
    text: "#008DFF",
  };

  if (name == null) {
    return defaultColors;
  }

  try {
    let char = name.substr(0, 1);
    const nameArr = name.split(" ");

    if (nameArr.length > 0) {
      const lastIndexData = nameArr[nameArr.length - 1];
      if (lastIndexData != null) {
        char = lastIndexData.charAt(lastIndexData.length - 1);
      }
    }
    char = char.toLowerCase();

    const charList = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 1,
      l: 0,
      m: 1,
      n: 2,
      o: 3,
      p: 4,
      q: 5,
      r: 6,
      s: 7,
      t: 8,
      u: 9,
      v: 1,
      w: 0,
      x: 1,
      y: 2,
      z: 3,
      0: 2,
      1: 0,
      2: 5,
      3: 5,
      4: 8,
      5: 6,
      6: 9,
      7: 7,
      8: 3,
      9: 1,
    };

    const index = charList[char];
    const color = colorPalette[index];

    if (color != null) {
      return color;
    }
    return defaultColors;
  } catch (e) {
    console.log(e);
  }

  return defaultColors;
};

const getInitials = (name) => {
  try {
    name = name.trim();

    if (name.length > 0) {
      const splittedName = name.split(" ");
      let label = splittedName[0].substr(0, 1);
      if (splittedName.length > 1) {
        const lastChar = splittedName[splittedName.length - 1].substr(0, 1);
        label += lastChar;
      }
      return label.toUpperCase();
    }
  } catch (error) {
    console.log("error in getInitials: ", error);
  }
  return "";
};

const RAvatar = ({ name, size, photo }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState(getInitials(name));
  const [palette, setPalette] = useState(getColorPaletteByName(name));

  useEffect(() => {
    setTitle(getInitials(name));
    setPalette(getColorPaletteByName(name));
  }, [name]);

  let organizationCode = user.OrganizationCode;

  const avatarBGColor = palette.background;
  const avatarTextColor = palette.text;

  //const url = `https://s3.amazonaws.com/a.webhr.co/org/${organizationCode}/ep/${organizationCode}_${photo}.jpg`;

  return <Avatar src={<Image src={avatar} />} size={80} />;
};

export default RAvatar;
