import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-20 p-4 border-b shadow-sm bg-[#fafafa] flex items-center">
            <div className="flex items-center w-full justify-between mx-auto md:max-w-screen-2xl">
                <h1>
                    EsportFinder
                </h1>
                <div className="space-x-2 flex items-center">
                    <Button size="sm" variant="default" asChild>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sign-up">
                            Get Esportfinder for free
                        </Link>
                    </Button>
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
    )
}