
import { Button } from '@/components/ui/button';
import { HiCommandLine } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import clsx from "clsx";
import { useState } from 'react';

export default function Top() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className="bg-[#16161a] w-full h-full absolute">
                <header className={clsx(
                    'flex justify-between items-center',
                    'text-black bg-white drop-shadow-md',
                    'py-2 px-8 md:px-32'
                )}>
                    {/* Icon */}
                    <a href="#">
                        <h1 className='flex items-center gap-2 hover:scale-105 transition-all'>
                            <HiCommandLine size={30} />
                            LR-base
                        </h1>
                    </a>

                    {/* Nav menu */}
                    <ul className='hidden lg:flex items-center gap-12 font-semibold text-base'>
                        <li className={clsx(
                            'hover:bg-sky-400 hover:text-white cursor-pointer rounded-md',
                            'p-2'
                        )}>
                            Sign Up
                        </li>
                        <li className={clsx(
                            'hover:bg-sky-400 hover:text-white cursor-pointer rounded-md',
                            'p-2'
                        )}>
                            Login
                        </li>
                    </ul>

                    {/* Search bar */}
                    <div className="relative hidden md:flex items-center justify-center gap-3">
                        <IoMdSearch className='absolute left-3 text-2xl text-gray-500' />
                        <input type="text" placeholder='Search'
                            className={clsx(
                                'py-2 pl-10 rounded-xl',
                                'border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500'
                            )}
                        />
                    </div>

                    {/* Menu Icon */}
                    <IoMdMenu className='lg:hidden block text-5xl cursor-pointer'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    {/* dropdown */}
                    <div className={clsx(
                        'absolute top-24 left-0',
                        'xl:hidden w-full',
                        'bg-white font-semibold text-lg',
                        'flex flex-col items-center gap-6',
                        'transform transition-transform',
                        {
                            'opacity-100': isMenuOpen,
                            'opacity-0': !isMenuOpen,
                        }
                    )}
                        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
                    >
                        <li className={clsx(
                            'list-none',
                            'w-full',
                            'text-center',
                            'p-4',
                            'transition-all',
                            'cursor-pointer',
                            'hover:bg-sky-400',
                            'hover:text-white'
                        )}>
                            Home
                        </li>

                    </div>

                </header>
            </div>
        </>
    )
}
