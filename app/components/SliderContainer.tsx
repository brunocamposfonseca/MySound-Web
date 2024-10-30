import { usePlayer } from "@/context/PlayerContext";
import { Slider } from "@/components/ui/slider";

export default function SliderContainer() {
    const { currentTime, duration, setAudioCurrentTime } = usePlayer();

    const handleSliderChange = (value: number[]) => {
        const time = value[0];
        setAudioCurrentTime(time);
    };

    const handleSliderCommit = (value: number[]) => {
        const time = value[0];
        setAudioCurrentTime(time);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className="flex flex-row gap-2 items-center">
            <p className="text-xs flex items-center select-none text-zinc-600 dark:text-zinc-400 w-10">{formatTime(currentTime)}</p>
            <Slider
                value={[currentTime]} 
                onValueChange={handleSliderChange} 
                onValueCommit={handleSliderCommit} 
                max={duration}
            />
            <p className="text-xs flex items-center select-none text-zinc-600 dark:text-zinc-400 w-10">{formatTime(duration)}</p>
        </div>
    );
}
