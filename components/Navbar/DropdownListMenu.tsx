import { TextAlignJustify } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/link';
import SignOutLinks from './SignOutLinks';
import { SignedIn,SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';




const DropdownListMenu = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline'>
                        <TextAlignJustify />
                        <UserIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <SignedOut>
                            <DropdownMenuItem>
                                <SignInButton mode='modal'>
                                    <button>Login</button>
                                </SignInButton>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <SignUpButton mode='modal'>
                                    <button>Register</button>
                                </SignUpButton>
                            </DropdownMenuItem>
                        </SignedOut>

                        <SignedIn>
                            {links.map((item, index) => {
                                return (<DropdownMenuItem key={index}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </DropdownMenuItem>
                                );
                            })} 
                            <DropdownMenuSeparator />
                            <SignOutLinks />
                        </SignedIn>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default DropdownListMenu