import { Button } from "@/components/ui/button"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import Tooltipx from "./Tooltipx"
import { useRouter } from "next/navigation"

interface ArrowButton {
    typeArrow?: boolean
}

export default function ArrowButton(props: ArrowButton) {
    const router = useRouter()
    return (
        <Tooltipx tooltip={props.typeArrow ? "Back" : "Forward"}>
            <Button
                onClick={() => {props.typeArrow ? router.back() : router.forward()}}
                variant={"link"}
                className="hover:text-zinc-600 dark:hover:text-zinc-400 p-0 text-2xl"
            >
                {props.typeArrow ? <BiChevronLeft /> : <BiChevronRight />}                
            </Button>
        </Tooltipx>
    )
}