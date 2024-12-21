import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

// const Toggle = () => {
//   const [selected, setSelected] = useState('light');
//   return (
//     <div
//       className={` place-content-center px-4 transition-colors ${
//         selected === 'light' ? 'retro' : 'bg-slate-900'
//       }`}
//     >
//       <SliderToggle selected={selected} setSelected={setSelected} />
//     </div>
//   );
// };

const Toggle = (props) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <input
        type="checkbox"
        className="toggle toggle-accent"
        onChange={(e) => props.checkCheckBox(e)}
        defaultChecked
      />
      <motion.span
        layout
        transition={{ type: 'spring', damping: 15, stiffness: 250 }}
        className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
      />
    </div>
  );
};

export default Toggle;
