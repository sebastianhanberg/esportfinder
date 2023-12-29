import { Button } from "@/components/ui/button"
import  Link  from "next/link"

export const Sidebar = () => {
    return (
        <div className="font-medium flex flex-col border-r">
            
            <div className="flex flex-col items-start gap-y-4">
            <button className="text-sm">
            <Link href="/main">
                Home
            </Link>
            </button>
            <button className="text-sm">
            <Link href="/feed">
                Find Team
            </Link>
            </button>
            <button className="text-sm">
            <Link href="/feed">
                Find Player
            </Link>
            </button>
            <button className="text-sm">
            <Link href="/ads">
                Explore
            </Link>
            </button>
            <button className="text-sm">
            <Link href="/community">
                Community
            </Link>
            </button>
            <div className="flex flex-col items-start gap-y-2 py-4">

            <Button size="sm" variant="outline">
            <Link href="/user">
                Profile
            </Link>
            </Button>
            <Button variant="ghost" size="sm">
                Messages
            </Button>
            </div>
            </div>
        </div>
    )
}