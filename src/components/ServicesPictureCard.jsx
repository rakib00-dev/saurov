import { FaArrowRight } from 'react-icons/fa';
import ServicesCardCom from './ServicesCardCom';

const ServicesPictureCard = () => {
  return (
    <ServicesCardCom src={'../assets/images/services/photoediting.png'}>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Offline & Online Editing{' '}
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Skilled in Premiere Pro, Final Cut Pro X, andDaVinci
        Resolve
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Support with narrative and conceptual builds by
        providing visual treatments
      </li>
    </ServicesCardCom>
  );
};

export default ServicesPictureCard;
