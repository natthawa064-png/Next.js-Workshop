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

                        
                            {links.map((item, index) => {
                                return (<DropdownMenuItem key={index}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </DropdownMenuItem>
                                );
                            })}
                        
                            <SignOutLinks />
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default DropdownListMenu