export const getColors = (type) => {
  // console.log(type)
  switch (type) {
    case "bug":
      // return "#729F92";
      return "#76A866";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "electric":
      return "#F4D23B";
    case "fairy":
      return "#EC8FE6";
    case "fighting":
      return "#CE4069";
    case "fire":
      // return "#F44900";
      return "#EAAB7D";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#5269AC";
    case "grass":
      // return "#70B873";
      return "#729F92";
    case "ground":
      return "#D97745";
    case "ice":
      return "#74CEC0";
    case "normal":
      // return "#8A8A8A";
      return "#BF9762";
    case "poison":
      return "#AD61AE";
    case "psychic":
      return "#F67176";
    case "rock":
      return "#C7B78B";
    case "steel":
      return "#BBBBBB";
    case "water":
      // return "#33A4F5";
      return "#71C3FF";
    default:
      return "#8A8A8A";
  }
};