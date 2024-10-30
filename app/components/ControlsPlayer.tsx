import { usePlayer } from "@/context/PlayerContext";
import { BsPauseFill, BsPlayFill, BsSkipBackwardFill, BsSkipForwardFill, BsRepeat, BsShuffle } from "react-icons/bs";
import Tooltipx from "./Tooltipx";

export default function ControlsPlayer() {
    const { isPlaying, togglePlay, nextTrack, previousTrack, isRepeating, toggleRepeat, isShuffling, toggleShuffle } = usePlayer();

    return (
        <div className="flex justify-center items-center gap-4">
            <Tooltipx tooltip="Shuffle">
                <button onClick={toggleShuffle} className={`text-sm ${isShuffling ? 'dark:text-purple-400 text-purple-600' : 'text-zinc-600 dark:text-zinc-200'} `}>
                    <BsShuffle />
                </button>
            </Tooltipx>

            <Tooltipx tooltip="Previous">
                <button onClick={previousTrack} className="text-lg text-zinc-700 dark:text-zinc-100">
                    <BsSkipBackwardFill />
                </button>
            </Tooltipx>

            {isPlaying ? (
                <Tooltipx tooltip="Pause">
                    <button onClick={togglePlay} className="text-3xl text-zinc-900 dark:text-white">
                        <BsPauseFill />
                    </button>
                </Tooltipx>
            ) : (
                <Tooltipx tooltip="Play">
                    <button onClick={togglePlay} className="text-3xl text-zinc-900 dark:text-white">
                        <BsPlayFill />
                    </button>
                </Tooltipx>
            )}

            <Tooltipx tooltip="Next">
                <button onClick={nextTrack} className="text-lg text-zinc-700 dark:text-zinc-100">
                    <BsSkipForwardFill />
                </button>
            </Tooltipx>

            <Tooltipx tooltip="Repeat">
                <button onClick={toggleRepeat} className={`text-sm ${isRepeating ? 'text-purple-600 dark:text-purple-400' : 'text-zinc-600 dark:text-zinc-200'} `}>
                    <BsRepeat />
                </button>
            </Tooltipx>
        </div>
    );
}
