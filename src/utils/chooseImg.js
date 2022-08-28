import cardImg1 from "../assets/item1.png";
import cardImg2 from "../assets/item2.png";
import cardImg3 from "../assets/item3.png";
import cardImg4 from "../assets/item4.png";
import cardImg5 from "../assets/item5.png";
import cardImg6 from "../assets/item6.png";

export const chooseImg = (id, setImg) => {
  switch (id) {
    case 1:
      setImg(cardImg1);
      break;
    case 2:
      setImg(cardImg2);
      break;
    case 3:
      setImg(cardImg3);
      break;
    case 4:
      setImg(cardImg4);
      break;
    case 5:
      setImg(cardImg5);
      break;
    case 6:
      setImg(cardImg6);
      break;
    default:
      break;
  }
};
