'use client'
import { Button } from "@/components/ui/button";
import { BsSearch } from "react-icons/bs";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";

export default function SearchInput() {
    const router = useRouter()

    function verifyPath() {
        router.asPath == "search" ? "" : router.basePath("d");
    }

    return(
        <div 
            onClick={() => router.as router.push('/search')}
            className="searchBox flex w-full gap-2 items-center py-1 px-1.5 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 rounded-md">
            <input placeholder="Pesquisar..." className="searchInput dark:placeholder:text-zinc-600 w-full outline-none border-none p-1.5 bg-transparent"/>
            <Button variant={"ghost"} className="text-zinc-600 dark:hover:text-white hover:text-black transition-all hover:bg-transparent px-2">
                <BsSearch className="text-lg"/>
            </Button>
        </div>
    )
}