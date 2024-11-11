'use client'
import { BsPip, BsVolumeDownFill, BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import { PiQueueBold } from "react-icons/pi";
import Tooltipx from "./Tooltipx";
import { Slider } from "@/components/ui/slider";
import { usePlayer } from "@/context/PlayerContext";
import { TbMicrophone2 } from "react-icons/tb";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { useExpand } from '@/context/ExpandContext';

export default function ControlsMusic() {
    const {
        volume,
        setVolume
    } = usePlayer();

    const handleVolumeChange = (value: number) => {
        setVolume(value / 100);
    };

    const handleVolume = () => {
        if (volume === 0) {
            setVolume(0.5);
        } else {
            setVolume(0);
        }
    };

    const { toggleExpand } = useExpand();

    return (
        <section className="flex w-full gap-5 items-center justify-end">
            <Tooltipx tooltip="Lyrics">
                <button className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl">
                    <TbMicrophone2 />
                </button>
            </Tooltipx>
            <Tooltipx tooltip="Syncronize">
                <button className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl">
                    <LuMonitorSmartphone />
                </button>
            </Tooltipx>
            <Tooltipx tooltip="View Queue">
                <button className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl">
                    <PiQueueBold />
                </button>
            </Tooltipx>
            <Tooltipx tooltip="Picture-In-Picture">
                <button className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl">
                    <BsPip />
                </button>
            </Tooltipx>

            <div className="flex gap-2 items-center justify-center w-2/6">
                <Tooltipx tooltip={volume === 0 ? "Unmute" : "Mute"}>
                    <button
                        className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl"
                        onClick={handleVolume}
                    >
                        {volume === 0 ? (
                            <BsVolumeMuteFill />
                        ) : volume > 0 && volume <= 0.5 ? (
                            <BsVolumeDownFill />
                        ) : (
                            <BsVolumeUpFill />
                        )}
                    </button>
                </Tooltipx>
                <Slider
                    className="w-full"
                    value={[volume * 100]}
                    onValueChange={(value) => handleVolumeChange(value[0])}
                    max={100}
                />
            </div>

            <Tooltipx tooltip="Expand">
                <button onClick={toggleExpand} className="flex items-center hover:bg-transparent text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-xl">
                    <RiExpandDiagonalLine />
                </button>
            </Tooltipx>
        </section>
    );
}
