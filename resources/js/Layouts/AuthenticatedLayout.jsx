import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { HiCommandLine } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa6";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    console.log(user);

    return (
        <>
            <div className="bg-[#16161a] w-full h-full absolute text-[#94a1b2]">
                <header className={clsx(
                    'flex justify-between items-center',
                    'text-[#94a1b2] bg-[#242629] drop-shadow-md',
                    'py-1 px-2 h-15'
                )}>
                    <div className="flex justify-start items-center">
                        {/* Icon */}
                        <Link href={route('root')}>
                            <h1 className='flex items-center gap-2 hover:scale-105 transition-all'>
                                <HiCommandLine size={30} />
                                <span className="hidden md:block">
                                    LR-base
                                </span>
                            </h1>
                        </Link>

                        {/* Search bar */}
                        {user.email_verified_at &&
                            <div className="relative flex items-center justify-center gap-3 ml-10">
                                <IoMdSearch className='absolute left-3 text-2xl text-gray-500' />
                                <input type="text" placeholder='Search'
                                    className={clsx(
                                        'py-2 pl-10 rounded-xl',
                                        'border-2 bg-[#16161a] border-none focus:outline-none'
                                    )}
                                />
                            </div>
                        }

                    </div>

                    {user.email_verified_at &&
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:outline-none focus:bg-inherit text-3xl">
                                <FaUserAstronaut className="mr-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="bg-[#16161a] text-[#94a1b2] border-none mr-3"
                            >
                                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer hover:bg-[#242629]">
                                    <Link href={route('profile.edit')}>Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer hover:bg-[#242629]">
                                    <Link href={route('logout')}>Logout</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }

                </header>

                {/* main content */}
                <main className="bg-[#16161a] text-[#94a1b2] min-h-screen">
                    {children}
                </main>
            </div>
        </>
    );
}
