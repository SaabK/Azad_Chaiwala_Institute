import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'internships', label: 'Internships' },
  { id: 'affiliate-program', label: 'Affiliate Program' },
  { id: 'payment', label: 'Payment' },
  { id: 'batches', label: 'Batches' },
  { id: 'contact-us', label: 'Contact Us' },
];

function MiniNavbar() {

  const [active, setActive] = useState<string>('');

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>, id: string): void => {
    e.preventDefault();
    setActive(id);
  }

  return (
    <nav className="flex items-center justify-between px-20">
      {tabs.map(tab => {
        return (
          <a
            key={tab.id}
            href=""
            onClick={(e) => handleClick(e, tab.id)}
            className={`${active === tab.id ? 'text-black' : 'hover:text-[#ccc]'} relative py-1.5 px-4 mb-2 mt-1`}
          >
            {/* {active === tab.id ? <motion.div layoutId='active' className='absolute bg-[#F0E914] inset-0' style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }} /> : null} */}
            {active === tab.id ? <motion.div layoutId='active' className='absolute bg-[#F0E914] inset-0' style={{ borderRadius: '6px' }} transition={{ type: 'just' }} /> : null}
            <span className='relative z-10'>{tab.label}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default MiniNavbar;