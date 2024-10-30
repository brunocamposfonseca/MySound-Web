import { BsCloudArrowDown, BsDisc, BsDownload, BsGear, BsHeart, BsHouse, BsMusicNoteList, BsPerson, BsSearch } from "react-icons/bs";
import LinkSidebar from "./LinkSidebar";

interface GroupLinksSidebarProps{
    resizable: boolean
}

export default function GroupLinksSidebar(props: GroupLinksSidebarProps) {
    return(
        <section className="flex flex-col justify-between h-full">
            <div className="mt-4 flex flex-col justify-center">
                <LinkSidebar icon={BsHouse} name="Home" url="/" tooltip="Home" resizable={props.resizable} />
                <LinkSidebar icon={BsSearch} name="Search" url="/search" tooltip="Search" resizable={props.resizable} />
                <LinkSidebar icon={BsDisc} name="Genres" url="/genres" tooltip="Genres" resizable={props.resizable} />
                <LinkSidebar icon={BsMusicNoteList} name="Playlists" url="/playlists" tooltip="Playlists" resizable={props.resizable} />
                <LinkSidebar icon={BsPerson} name="Artists" url="/artists" tooltip="Artists" resizable={props.resizable} />
                <LinkSidebar icon={BsHeart} name="Likes" url="/likes" tooltip="Likes" resizable={props.resizable} />
                <LinkSidebar icon={BsCloudArrowDown} name="Downloads" url="/downloads" tooltip="Downloads" resizable={props.resizable} />
            </div>
            <div className="flex flex-col justify-center">
                <LinkSidebar icon={BsDownload} name="Install" url="/install" tooltip="Install" resizable={props.resizable} />
                <LinkSidebar icon={BsGear} name="Settings" url="/settings" tooltip="Settings" resizable={props.resizable} />
            </div>
        </section>
    )
}