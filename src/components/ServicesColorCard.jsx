import { FaArrowRight } from 'react-icons/fa';
import ServicesCardCom from './ServicesCardCom';

const ServicesColorCard = () => {
  return (
    <ServicesCardCom src={'../assets/images/services/color.png'}>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Proficiency in DaVinci Resolve
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Visual style creation and shot matching
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Skin tone correction
      </li>
    </ServicesCardCom>
  );
};

export default ServicesColorCard;
