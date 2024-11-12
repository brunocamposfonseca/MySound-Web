import ControlsPlayer from "./ControlsPlayer";
import SliderContainer from "./SliderContainer";

export default function PlayerControls() {
    return(
        <section className="flex w-full gap-2 flex-col p-2">
            <ControlsPlayer />
            <SliderContainer />
        </section>
    )
}