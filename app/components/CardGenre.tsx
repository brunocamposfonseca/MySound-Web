import Link from "next/link";

interface CardGenreProps {
    url: string
    cover: string
}

export default function CardGenre(props: CardGenreProps) {
    return (
        <Link href={props.url} className="flex items-center justify-center w-full aspect-square transition-all hover:saturate-200 border rounded-2xl border-zinc-300 dark:border-zinc-800 bg-gradient-to-r from-gray-500 to-stone-500">
            <img src={props.cover} className="w-full h-full rounded-2xl" />
        </Link>
    );
}
