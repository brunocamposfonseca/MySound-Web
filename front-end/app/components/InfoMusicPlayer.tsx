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
    <section className="flex flex-row gap-4 items-center p-2">
      <div className="flex items-center gap-4">
        <Image
          src={currentTrack.cover}
          alt="Capa"
          className="rounded-sm cursor-pointer hover:brightness-75 transition-all"
          width={55}
          height={55}
        />
        <div className="grid grid-areas-infoPlayer grid-cols-[auto_1fr] grid-rows-[auto_auto]">
            <Link
              href={currentTrack.id}
              className={`flex hover:underline whitespace-nowrap w-full line-clamp-2 grid-in-title text-ellipsis overflow-hidden text-sm font-medium`}
            >
              <Tooltipx tooltip={currentTrack.title}>
                {currentTrack.title}
              </Tooltipx>
            </Link>
          <span
            className={`flex w-full whitespace-nowrap grid-in-subtitle overflow-hidden text-xs`}
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
