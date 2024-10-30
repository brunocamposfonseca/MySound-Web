import Image from "next/image"
import Logo from "../../public/images/full-1-white.png"

interface HeadingSidebarProps{
    resizable: boolean
}

export default function HeadingSidebar(props: HeadingSidebarProps) {
    return(
        <div className="flex flex-row gap-2 items-center">
            <Image src={Logo} alt="" className="w-8"/>
            {props.resizable ? "" : <h1 className="font-semibold text-xl select-none">MySound</h1>}
        </div>
    )
}