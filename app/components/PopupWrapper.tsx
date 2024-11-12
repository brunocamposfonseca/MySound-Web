'use client';

import { ReactNode } from 'react';
import { useExpand } from '@/context/ExpandContext';
import Tooltipx from './Tooltipx';
import { RiCollapseDiagonalLine } from 'react-icons/ri';
import Logo from "@/public/images/full-1-white.png"
import Image from 'next/image';

interface PopupWrapperProps {
  children: ReactNode;
}

export default function PopupWrapper({ children }: PopupWrapperProps) {
  const { isExpanded, toggleExpand } = useExpand();

  return (
    <div className="h-full relative">
      {children}
      {isExpanded && (
        <div
        className={`h-full w-full absolute z-10 top-0 bg-expand-radial/30 backdrop-blur-xl p-12 transition-opacity duration-500 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
        >
          <div>
            <div>
              <Image src={Logo} alt=""  height={30}width={30} />
            </div>
          </div>
          <Tooltipx tooltip="Collapse">
            <button
              onClick={toggleExpand}
              className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl"
            >
              <RiCollapseDiagonalLine />
            </button>
          </Tooltipx>
        </div>
      )}
    </div>
  );
}
