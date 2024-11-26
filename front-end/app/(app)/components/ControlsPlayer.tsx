import { usePlayer } from "@/context/PlayerContext";
import { BsPauseFill, BsPlayFill, BsSkipBackwardFill, BsSkipForwardFill, BsRepeat, BsShuffle } from "react-icons/bs";
import Tooltipx from "./Tooltipx";

export default function ControlsPlayer() {
    const { isPlaying, togglePlay, nextTrack, previousTrack, isRepeating, toggleRepeat, isShuffling, toggleShuffle } = usePlayer();

    return (
        <div className="flex justify-center items-center gap-4">
            <Tooltipx tooltip="Shuffle">
                <button onClick={toggleShuffle} className={`text-lg ${isShuffling ? 'dark:text-purple-400 text-purple-600' : 'text-zinc-400 dark:text-zinc-500 hover:text-black hover:dark:text-white transition-all'} h-full flex align-center`}>
                    <BsShuffle />
                </button>
            </Tooltipx>

            <Tooltipx tooltip="Previous">
                <button onClick={previousTrack} className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-black hover:dark:text-white transition-all h-full flex align-center">
                    <BsSkipBackwardFill />
                </button>
            </Tooltipx>

            {isPlaying ? (
                <Tooltipx tooltip="Pause">
                    <button onClick={togglePlay} className="text-3xl text-zinc-900 dark:text-white hover:text-zinc-700 hover:dark:text-zinc-300 transition-all h-full flex align-center">
                        <BsPauseFill />
                    </button>
                </Tooltipx>
            ) : (
                <Tooltipx tooltip="Play">
                    <button onClick={togglePlay} className="text-3xl text-zinc-900 dark:text-white hover:text-zinc-700 hover:dark:text-zinc-300 transition-all h-full flex align-center">
                        <BsPlayFill />
                    </button>
                </Tooltipx>
            )}

            <Tooltipx tooltip="Next">
                <button onClick={nextTrack} className="text-lg text-zinc-600 dark:text-zinc-300 hover:text-black hover:dark:text-white transition-all h-full flex align-center">
                    <BsSkipForwardFill />
                </button>
            </Tooltipx>

            <Tooltipx tooltip="Repeat">
                <button onClick={toggleRepeat} className={`text-lg ${isRepeating ? 'text-purple-600 dark:text-purple-400' : 'text-zinc-400 dark:text-zinc-500 hover:text-black hover:dark:text-white transition-all'} h-full flex align-center `}>
                    <BsRepeat />
                </button>
            </Tooltipx>
        </div>
    );
}
