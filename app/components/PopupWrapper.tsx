'use client';

import { ReactNode } from 'react';
import { useExpand } from '@/context/ExpandContext';

interface PopupWrapperProps {
  children: ReactNode;
}

export default function PopupWrapper({ children }: PopupWrapperProps) {
  const { isExpanded } = useExpand();

  return (
    <div className="h-full relative">
      {children}
      {isExpanded && (
        <div className="h-full w-full absolute z-10 bg-expand-radial/30 backdrop-blur-sm">
          {/* Conteúdo da popup */}
        </div>
      )}
    </div>
  );
}
