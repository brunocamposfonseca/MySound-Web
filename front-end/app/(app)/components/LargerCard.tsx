"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BsPlayFill } from "react-icons/bs"

interface LargerCardProps {
    id: string
    name: string
    artist: Record<string, string>
    cover: string
}

export default function LargerCard(props: LargerCardProps) {
    const [hover, setHover] = useState(false);

    function handleHoverOut() {
        setHover(false)
    }

    function handleHoverOver() {
        setHover(true)
    }
    return(
        <div
            onMouseOut={handleHoverOut}
            onMouseOver={handleHoverOver}
            className="p-4 dark:hover:border-zinc-600 transition-all border flex gap-4 rounded hover:shadow-md card-container h-full"
        >
            <div className="relative">
                <Image 
                    src={props.cover} 
                    alt={`Cover Music ${props.name} `}
                    className="rounded hover:saturate-150 transition-all hover:shadow-lg"
                    width={220}
                    height={220}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Link 
                    href={`/${props.id}`}
                    className={`hover:underline max-w-full line-clamp-2 text-base font-medium`}
                >
                    {props.name}
                </Link>
                <span
                    className=" flex max-w-64 text-xs text-zinc-600"
                >
                    {Object.entries(props.artist).map(([id, name], index, array) => (
                    <span key={id}>
                        <Link href={`/artist/${id}`} className="hover:underline text-zinc-600 dark:text-zinc-400 dark:hover:text-white hover:text-black">
                        {name}
                        </Link>
                        {index < array.length - 1 && ", "}
                    </span>
                    ))}
                </span>
            </div>
            <Button className={`py-7 px-3 bg-purple-700 shadow-xl hover:bg-purple-600 rounded-full text-3xl text-white transition-all ${hover ? "visible" : "invisible"}`}>
                <BsPlayFill className="w-8 h-8 flex items-center" />
            </Button>
        </div>
    )
}