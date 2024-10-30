"use client"
import Image from "next/image";
import Link from "next/link";
import cover from "@/public/covers/cover1.jpeg"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsPlayFill } from "react-icons/bs";

export default function MiniCard() {
    const [hover, setHover] = useState(false);

    function handleHoverOut() {
        setHover(false)
    }

    function handleHoverOver() {
        setHover(true)
    }
    return (
        <div
            onMouseOut={handleHoverOut}
            onMouseOver={handleHoverOver}
            className="flex w-full justify-between items-center transition-all bg-zinc-900/5 hover:bg-zinc-900/10 dark:bg-zinc-100/5 hover:dark:bg-zinc-100/10 shadow-sm rounded-lg cursor-pointer"
        >
            <div className="flex gap-4">
                <Image
                    src={cover}
                    alt={""}
                    width={56}
                    height={56}
                    className="rounded-s-md"
                />
                <div className="flex flex-col gap-0 py-2">
                    <Link
                        href={"currentTrack.id"}
                        className={`flex hover:underline whitespace-nowrap max-w-full overflow-hidden text-base font-medium`}
                    >
                        Musica
                    </Link>
                    <Link href={`/artist/`} className="hover:underline text-xs text-zinc-600 dark:text-zinc-400 dark:hover:text-white hover:text-black">
                        Artista
                    </Link>
                </div>
            </div>
            <div>
                <Button className={`play-button-card py-4 px-2 bg-purple-700 shadow-xl hover:bg-purple-600 rounded-full text-3xl text-white transition-all mr-4 ${hover ? "visible" : "invisible"}`}>
                    <BsPlayFill className="w-5 h-5 flex items-center" />
                </Button>
            </div>
        </div>
    )
}