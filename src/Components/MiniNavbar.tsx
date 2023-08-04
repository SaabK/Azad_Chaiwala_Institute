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
    <nav className="flex items-center justify-between md:px-20 xl:py-1">
      {tabs.map(tab => {
        return (
          <a
            key={tab.id}
            href=""
            onClick={(e) => handleClick(e, tab.id)}
            className={`${active === tab.id ? 'text-black' : 'hover:text-[#ccc]'} relative py-1 px-2 mb-2 mt-1 text-center text-[10px] xl:text-[14px]`}
          >
            {active === tab.id ? <motion.div layoutId='active' className='absolute bg-[#F0E914] inset-0' style={{ borderRadius: '6px' }} transition={{ type: 'just' }} /> : null}
            <span className='relative z-10'>{tab.label}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default MiniNavbar;