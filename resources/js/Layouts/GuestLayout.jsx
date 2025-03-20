import { HiCommandLine } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import clsx from "clsx";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

export default function GuestLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { component } = usePage()

    return (
        <>
            <div className="bg-[#16161a] w-full h-full absolute text-[#94a1b2]">
                <header className={clsx(
                    'flex justify-between items-center',
                    'text-[#94a1b2] bg-[#242629] drop-shadow-md',
                    'py-1 px-2 h-15'
                )}>
                    {/* Icon */}
                    <div className="flex justify-start items-center">
                        <Link href={route('root')}>
                            <h1 className='flex items-center gap-2 hover:scale-105 transition-all'>
                                <HiCommandLine size={30} />
                                <span className="hidden md:block">
                                    LR-base
                                </span>
                            </h1>
                        </Link>

                        {/* Search bar */}
                        <div className="relative flex items-center justify-center gap-3 ml-10">
                            <IoMdSearch className='absolute left-3 text-2xl text-gray-500' />
                            <input type="text" placeholder='Search'
                                className={clsx(
                                    'py-2 pl-10 rounded-xl',
                                    'border-2 bg-[#16161a] border-none focus:outline-none'
                                )}
                            />
                        </div>
                    </div>

                    {/* Nav menu */}
                    <ul className='hidden lg:flex items-center gap-3 font-semibold text-base mr-3'>
                        <li className={clsx({ 'hidden': component == 'Auth/Login' })}>
                            <Button size="sm" className="hover:bg-[#464444]">
                                <Link href={route('login')}>
                                    Login
                                </Link>
                            </Button>
                        </li>

                        <li className={clsx({ 'hidden': component == 'Auth/Register' })}>
                            <Button size="sm" className="bg-[#2cb67d] hover:bg-[#198a5b]">
                                <Link href={route('register')}>
                                    Sign Up
                                </Link>
                            </Button>
                        </li>
                    </ul>

                    {/* Menu Icon */}
                    {isMenuOpen ? (
                        <RxCross1 className='lg:hidden block text-5xl cursor-pointer'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    ) : (
                        <IoMdMenu className='lg:hidden block text-5xl cursor-pointer'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    )}


                    {/* dropdown */}
                    <div className={clsx(
                        'absolute left-0',
                        'flex flex-col items-center gap-1',
                        'transform transition-transform',
                        'xl:hidden w-full',
                        'text-[#94a1b2] bg-[#242629] font-semibold text-lg',
                        {
                            'opacity-100': isMenuOpen,
                            'opacity-0 pointer-events-none': !isMenuOpen,
                        }
                    )}
                        style={{ transition: "transform 0.3s ease, opacity 0.3s ease", top: '50px' }}
                    >
                        <li className={clsx(
                            'w-full p-3',
                            'text-center list-none cursor-pointer',
                            { 'hidden': component == 'Auth/Login' },
                        )}>
                            <Link href={route('login')} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                Login
                            </Link>
                        </li>

                        <li className={clsx(
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
                <main className="text-[#94a1b2]">
                    {children}
                </main>
            </div>
        </>
    );
}
