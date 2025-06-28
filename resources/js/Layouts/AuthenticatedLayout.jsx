import { Link, usePage, useForm } from "@inertiajs/react";
import { FaUserAstronaut } from "react-icons/fa6";
import { HiCommandLine } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { cn } from "@/lib/utils";
import {
    DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const { post } = useForm();

    const submit = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <>
            <div className={cn(
                'bg-[#16161a] w-full h-full absolute text-[#94a1b2]'
            )}>
                <header className={cn(
                    'relative',
                    'flex justify-between items-center',
                    'text-[#94a1b2] bg-[#242629] drop-shadow-md',
                    'py-1 px-2 h-15'
                )}>
                    <div className={cn('flex justify-start items-center')}>
                        {/* Icon */}
                        <Link href={route('root')}>
                            <h1 className={cn(
                                'flex items-center gap-2',
                                'hover:scale-105 transition-all'
                            )}>
                                <HiCommandLine size={30} />
                                <span className={cn('hidden md:block')}>
                                    LR-base
                                </span>
                            </h1>
                        </Link>

                        {/* Search bar */}
                        {user.email_verified_at &&
                            <div className={cn(
                                'relative flex items-center justify-center gap-3 ml-10'
                            )}>
                                <IoMdSearch className={cn(
                                    'absolute left-3 text-2xl text-gray-500'
                                )} />
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className={cn(
                                        'py-2 pl-10 rounded-xl',
                                        'border-2 bg-[#16161a] border-none focus:outline-none'
                                    )}
                                />
                            </div>
                        }

                    </div>

                    {/* user menu */}
                    {user.email_verified_at &&
                        <DropdownMenu>
                            <DropdownMenuTrigger className={cn(
                                'focus:outline-none focus:bg-inherit focus:ring-0 focus:border-none text-3xl'
                            )}>
                                <FaUserAstronaut className={cn('mr-4')} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={0}
                                className={cn(
                                    'bg-[#16161a] text-[#94a1b2] border-none mr-3'
                                )}
                            >
                                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className={cn(
                                    'cursor-pointer hover:bg-[#242629]'
                                )}>
                                    <Link href={route('profile.edit')}>Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className={cn(
                                    'cursor-pointer hover:bg-[#242629]'
                                )}>
                                    <form onSubmit={submit}>
                                        <button
                                            type="submit"
                                            className={cn(
                                                'w-full text-left bg-transparent border-none p-0 m-0 cursor-pointer'
                                            )}
                                        >
                                            Logout
                                        </button>
                                    </form>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }
                </header>

                {/* main content */}
                <main className={cn(
                    'bg-[#16161a] text-[#94a1b2] min-h-screen'
                )}>
                    {children}
                </main>
            </div>
        </>
    );
}
