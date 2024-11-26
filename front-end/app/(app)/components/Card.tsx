import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BsPlayFill } from "react-icons/bs"

interface CardProps {
    id: string
    name: string
    artist: Record<string, string>
    cover: string
}

export default function Card(props: CardProps) {
    return(
        <AspectRatio
            className="p-4 dark:hover:border-zinc-600 transition-all border flex flex-col gap-4 rounded hover:shadow-md card-container h-full"
            ratio={2/3}
        >
            <div className="relative">
                <Link
                    href={`/track/${props.id}`}
                >
                    <Image 
                        src={props.cover} 
                        alt={`Cover Music ${props.name} `}
                        className="rounded hover:saturate-150 transition-all hover:shadow-lg hover:skew-x-2"
                        width={220}
                        height={220}
                        loading="lazy"
                    />
                </Link>
                <Button className="play-button-card absolute bottom-4 right-4 py-7 px-3 bg-purple-700 shadow-xl hover:bg-purple-600 rounded-full text-3xl text-white transition-all opacity-0 translate-y-[20px]">
                    <BsPlayFill className="w-8 h-8 flex items-center" />
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <Link 
                    href={`/track/${props.id}`}
                    className={`hover:underline max-w-full line-clamp-2 text-ellipsis overflow-hidden text-base font-medium`}
                >
                    {props.name}
                </Link>
                <span
                    className=" inline max-w-64 text-xs line-clamp-2 text-ellipsis overflow-hidden text-zinc-600"
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
        </AspectRatio>
    )
}