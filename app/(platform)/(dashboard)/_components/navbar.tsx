import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-20 p-4 border-b shadow-sm bg-[#fafafa] flex items-center">
            <div className="flex items-center w-full justify-between mx-auto md:max-w-screen-2xl">
                <h1>
                    EsportFinder
                </h1>
                <div className="space-x-2 flex items-center">
                    
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
    )
}