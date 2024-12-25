import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ServicesCardCom from './ServicesCardCom';

const ServicesMotionCard = () => {
  return (
    <ServicesCardCom src={'../assets/images/services/motiondesign.png'}>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Skilled in After Effects and complimentary Adobe Suite
        products
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Supports with concept generation and art direction
      </li>
      <li className="flex justify-start items-center gap-3 text-md">
        <FaArrowRight /> Visual effects pipeline experience
      </li>
    </ServicesCardCom>
  );
};

export default ServicesMotionCard;
