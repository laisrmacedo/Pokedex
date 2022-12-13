import bug from "../assets/types/bug.png";
import dark from "../assets/types/dark.png";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.png";
import fairy from "../assets/types/fairy.png";
import fighting from "../assets/types/fighting.png";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import ghost from "../assets/types/ghost.png";
import grass from "../assets/types/grass.png";
import ground from "../assets/types/ground.png";
import ice from "../assets/types/ice.png";
import normal from "../assets/types/normal.png";
import poison from "../assets/types/poison.png";
import psychic from "../assets/types/psychic.png";
import rock from "../assets/types/rock.png";
import steel from "../assets/types/steel.png";
import water from "../assets/types/water.png";

export const getTypes = (type) => {
  switch (type) {
    case "Bug":
      return bug;
    case "Dark":
      return dark;
    case "Dragon":
      return dragon;
    case "Electric":
      return electric;
    case "Fairy":
      return fairy;
    case "Fighting":
      return fighting;
    case "Fire":
      return fire;
    case "Flying":
      return flying;
    case "Ghost":
      return ghost;
    case "Grass":
      return grass;
    case "Ground":
      return ground;
    case "Ice":
      return ice;
    case "Normal":
      return normal;
    case "Poison":
      return poison;
    case "Psychic":
      return psychic;
    case "Rock":
      return rock;
    case "Steel":
      return steel;
    case "Water":
      return water;
    default:
      return water;
  }
};