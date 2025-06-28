import { HiCommandLine } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

export default function GuestLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { component } = usePage()

    return (
        <>
            <div className={cn('bg-[#16161a] w-full h-full absolute text-[#94a1b2]')}>
                <header className={cn(
                    'flex justify-between items-center',
                    'text-[#94a1b2] bg-[#242629] drop-shadow-md',
                    'py-1 px-2 h-12'
                )}>
                    {/* Icon */}
                    <div className={cn('flex justify-start items-center')}>
                        <Link href={route('root')}>
                            <h1 className={cn('flex items-center gap-2 hover:scale-105 transition-all')}>
                                <HiCommandLine size={25} />
                                <span className={cn('hidden md:block')}>
                                    LR-base
                                </span>
                            </h1>
                        </Link>

                        {/* Search bar */}
                        <div className={cn('relative flex items-center justify-center gap-3 ml-10')}>
                            <IoMdSearch className={cn('absolute left-3 text-xl text-gray-500')} />
                            <input
                                type="text"
                                placeholder='Search'
                                className={cn(
                                    'py-1 pl-10 rounded-xl',
                                    'border-2 bg-[#16161a] border-none focus:outline-none'
                                )}
                            />
                        </div>
                    </div>

                    {/* Nav menu */}
                    <ul className={cn('hidden lg:flex items-center gap-3 font-semibold text-base mr-3')}>
                        <li className={cn({ 'hidden': component == 'Auth/Login' })}>
                            <Link
                                href={route('login')}
                                className={cn(
                                    "inline-block px-4 py-2 rounded",
                                    "bg-transparent hover:bg-[#464444]",
                                    "text-inherit transition-colors"
                                )}
                            >
                                Login
                            </Link>
                        </li>

                        <li className={cn({ 'hidden': component == 'Auth/Register' })}>
                            <Link
                                href={route('register')}
                                className={cn(
                                    "inline-block px-4 py-2 rounded",
                                    "bg-[#2cb67d] hover:bg-[#198a5b]",
                                    "text-[#16161a] font-bold transition-colors"
                                )}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    {/* Menu Icon */}
                    {isMenuOpen ? (
                        <RxCross1
                            className={cn('lg:hidden block text-2xl cursor-pointer')}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    ) : (
                        <IoMdMenu
                            className={cn('lg:hidden block text-2xl cursor-pointer')}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    )}


                    {/* dropdown */}
                    <div className={cn(
                        'absolute left-0',
                        'flex flex-col items-center gap-1',
                        'transform transition-transform',
                        'xl:hidden w-full',
                        'text-[#94a1b2] bg-[#242629] font-semibold text-base',
                        {
                            'opacity-100': isMenuOpen,
                            'opacity-0 pointer-events-none': !isMenuOpen,
                        }
                    )}
                        style={{ transition: "transform 0.3s ease, opacity 0.3s ease", top: '40px' }}>
                        <li className={cn(
                            'w-full p-3',
                            'text-center list-none cursor-pointer',
                            { 'hidden': component == 'Auth/Login' },
                        )}>
                            <Link href={route('login')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                Login
                            </Link>
                        </li>

                        <li className={cn(
                            'w-full p-3',
                            'text-center list-none cursor-pointer',
                            { 'hidden': component == 'Auth/Register' },
                        )}>
                            <Link href={route('register')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                Sign Up
                            </Link>
                        </li>
                    </div>
                </header>
                <main className={cn('text-[#94a1b2]')}>
                    {children}
                </main>
            </div>
        </>
    );
}
