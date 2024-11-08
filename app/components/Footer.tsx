import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="w-full h-full py-10">
            <div className="w-full flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        {/* <Image src='/path/to/your/image.jpg' alt='Descrição da imagem' width={100} height={50} /> */}
                        <p className="font-medium">Social Medias</p>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-lg hover:bg-zinc-400/30 p-2 rounded-full transition-all">
                                <BsInstagram />
                            </Link>
                            <Link href="#" aria-label="Facebook" className="text-lg hover:bg-zinc-400/30 p-2 rounded-full transition-all">
                                <BsFacebook />
                            </Link>
                            <Link href="#" aria-label="TwitterX" className="text-lg hover:bg-zinc-400/30 p-2 rounded-full transition-all">
                                <BsTwitterX />
                            </Link>
                            <Link href="#" aria-label="TikTok" className="text-lg hover:bg-zinc-400/30 p-2 rounded-full transition-all">
                                <BsTiktok />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Documents</h3>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Policy and Privacy</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Terms of Use</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">User Agreement</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">User Defense</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Copyright</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">API</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Help</h3>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Report</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Platform issues</Link>
                            </li>
                            <li> 
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">User Account</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Songs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Satus Inc</h3>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">About</Link>
                            </li>
                            <li>
                                <Link href="https://mysoundapp.website" target="_blank" rel="noopener noreferrer" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">MySound</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Drilling</Link>
                            </li>
                            <li>
                                <Link href="#" className="transition-all text-zinc-400 italic hover:underline hover:text-black dark:hover:text-white text-sm">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full text-end border-t pt-6 mt-6">
                    <p className="text-xs text-zinc-400 select-none">
                        &copy; {new Date().getUTCFullYear()} - Todos os direitos reservados por <Link className="italic hover:underline" href="#">MySound. Inc</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
