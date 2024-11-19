import { Button } from "@/components/ui/button";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
    return(
        <div className="flex gap-2 items-center py-1 px-2 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 rounded-md">
            <input placeholder="Pesquisar..." className="dark:placeholder:text-zinc-600 w-full outline-none border-none p-1.5  bg-transparent"/>
            <Button variant={"ghost"} className="text-zinc-600 dark:hover:text-white hover:text-black transition-all hover:bg-transparent px-2">
                <BsSearch className="text-lg"/>
            </Button>
        </div>
    )
}