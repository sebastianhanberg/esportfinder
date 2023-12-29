import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketingPage  = () => {
        return (
            <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                        Find teams and players
                    </h1>
                    <div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 p-2 rounded-md w-fit shadow-md">
                        Your Talent Finder
                    </div>
                </div>
                <div className="text-sm md:text-xl text-neutral-600 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
                Find esports players and teams looking for teammates on EsportFinder, an esports team finding platform. Create your own player or team profile and let them find you.
                </div>
                <Button className="mt-6" size="lg" asChild>
                    <Link href="/sign-up">
                         Sign up for free
                    </Link>
                </Button>
            </div>
        )
    }
export default MarketingPage;