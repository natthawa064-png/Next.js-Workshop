import { Darkmode } from "./DarkMode"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between container py-8 sm:flex-row
            sm:items-center flex-col gap-6">
                <Logo />
                <Search />

                <div className="flex gap-4">
                    <Darkmode />
                    <DropdownListMenu />
                </div>
            </div>
        </nav>
    )
}
export default Navbar