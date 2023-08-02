import { Dispatch, SetStateAction } from 'react';

interface Props {
  children: React.ReactNode
}

interface ModalContextValue {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

import { createContext, useState } from "react";

export const ModalContext = createContext<ModalContextValue>({ isOpen: false, setIsOpen() { } });

const ModalProvider: React.FC<Props> = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;

