

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ReactNode } from "react"
import { BsCopy, BsDownload, BsExclamationOctagon, BsHeart, BsInstagram, BsMusicNoteList, BsPerson, BsPersonAdd, BsPersonSlash, BsShare, BsTwitterX, BsWhatsapp } from "react-icons/bs"
import { LuListPlus } from "react-icons/lu";
import { TbMusicQuestion } from "react-icons/tb";
import DialogShare from "./DialogShare";

interface DropdownPlayerOptionsProps {
    children: ReactNode
    song: string
}

export default function DropdownPlayerOptions({ song, children }: DropdownPlayerOptionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BsHeart className="mr-2 h-4 w-4" />
                        <span>Save</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                        <BsMusicNoteList className="mr-2 h-4 w-4" />
                        <span>Add to Playlist</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <span>As Melhores</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Minhas Musicas</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Playlist 01</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <LuListPlus className="mr-2 h-4 w-4" />
                        <span>Add to Queue</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                        <BsShare className="mr-2 h-4 w-4" />
                        <span>Share</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <BsWhatsapp className="mr-2 h-4 w-4" />
                                    <span>WhatsApp</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <BsInstagram className="mr-2 h-4 w-4" />
                                    <span>Instagram</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <BsTwitterX className="mr-2 h-4 w-4" />
                                    <span>Twitter</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <BsCopy className="mr-2 h-4 w-4" />
                                        <span>Copy Link Music</span>
                                    </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <BsDownload className="mr-2 h-4 w-4" />
                        <span>Download</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BsPersonAdd className="mr-2 h-4 w-4" />
                        <span>Follow Artist</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BsPerson className="mr-2 h-4 w-4" />
                        <span>Go to the Artist</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BsPersonSlash className="mr-2 h-4 w-4" />
                        <span>Block Artist</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <BsExclamationOctagon className="mr-2 h-4 w-4" />
                    <span>Report</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <TbMusicQuestion className="mr-2 h-4 w-4" />
                    <span>Credits</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
