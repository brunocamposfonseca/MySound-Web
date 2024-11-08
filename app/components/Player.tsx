"use client";

import ControlsMusic from "./ControlsMusic";
import InfoMusicPlayer from "./InfoMusicPlayer";
import PlayerMusic from "./PlayerMusic";

export default function Player() {
  return (
    <section className="flex grid-in-player items-center w-full bg-zinc-50 dark:bg-zinc-950 py-2 px-4 h-24 border-t-2 dark:border-t-zinc-800">
      <section className="grid grid-cols-3 w-full">
        <div>
          <InfoMusicPlayer />
        </div>
        <div className="flex items-center w-full">
          <PlayerMusic />
        </div>
        <div className="flex justify-end">
          <ControlsMusic />
        </div>
      </section>
    </section>
  );
}
