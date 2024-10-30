"use client";

import { usePlayer } from "@/context/PlayerContext";
import Image from "next/image";
import Tooltipx from "./Tooltipx";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DropdownPlayerOptions from "./DropdownPlayerOptions";

export default function InfoMusicPlayer() {
  const { currentTrack } = usePlayer();
  if (!currentTrack) return null;

  return (
    <section className="flex flex-row gap-4 items-center p-4">
      <div className="flex items-center gap-4">
        <Image
          src={currentTrack.cover}
          alt="Capa"
          className="w-16 h-16 rounded-sm cursor-pointer hover:saturate-100"
          width={80}
          height={80}
        />
        <div className="flex flex-col w-auto">
          <Tooltipx tooltip={currentTrack.title}>
            <Link
              href={currentTrack.id}
              className={`flex hover:underline whitespace-nowrap max-w-64 line-clamp-2 text-ellipsis overflow-hidden text-base font-medium`}
            >
              {currentTrack.title}
            </Link>
          </Tooltipx>
          <span
            className={`flex max-w-64 whitespace-nowrap overflow-hidden text-xs`}
          >
            {Object.entries(currentTrack.artist).map(([id, name], index, array) => (
              <span key={id} className="text-xs text-zinc-600 dark:text-zinc-400 dark:hover:text-white hover:text-black">
                <Link href={`/artist/${id}`} className="hover:underline ">
                  {name}
                </Link>
                {index < array.length - 1 && ", "}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <Tooltipx tooltip="Save">
          <Button
            variant="ghost"
            className="hover:bg-transparent transition-all text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-lg"
          >
            <BsHeart />
          </Button>
        </Tooltipx>

        <Tooltipx tooltip="More info">
          <DropdownPlayerOptions song={currentTrack.id}>
            <Button
              variant="ghost"
              className="hover:bg-transparent transition-all text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-lg"
            >
              <BsThreeDots />
            </Button>
          </DropdownPlayerOptions>
        </Tooltipx>

      </div>
    </section>
  );
}
