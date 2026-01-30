import { SignOutButton } from "@clerk/nextjs"
import { LogOut } from 'lucide-react';

const SignOutLinks = () => {
    return (
        <div className="w-full">
            <SignOutButton redirectUrl="/">
                <button
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
                    aria-label="Sign out"
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </button>
            </SignOutButton>
        </div>
    )
}
export default SignOutLinks