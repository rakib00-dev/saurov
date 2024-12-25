import { FaArrowRight } from 'react-icons/fa';
import ServicesCardCom from './ServicesCardCom';

const ServicesPostCard = () => {
  return (
    <ServicesCardCom src={'../assets/images/services/post.png'}>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Comprehensive project planning and coordination
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Effective resource and budget management
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Successful stakeholder collaboration
      </li>
    </ServicesCardCom>
  );
};
export default ServicesPostCard;
