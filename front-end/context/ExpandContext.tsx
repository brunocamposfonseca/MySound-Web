'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface ExpandContextType {
  isExpanded: boolean;
  toggleExpand: () => void;
}

const ExpandContext = createContext<ExpandContextType | undefined>(undefined);

export function ExpandProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <ExpandContext.Provider value={{ isExpanded, toggleExpand }}>
      {children}
    </ExpandContext.Provider>
  );
}

export function useExpand(): ExpandContextType {
  const context = useContext(ExpandContext);
  if (!context) {
    throw new Error('useExpand must be used within an ExpandProvider');
  }
  return context;
}
