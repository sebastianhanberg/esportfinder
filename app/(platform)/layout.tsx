import { Toaster } from "sonner";
import { Navbar } from "./(dashboard)/_components/navbar";


const PlatformLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    
    return (
        <div>
            <Navbar />
            <Toaster />
            {children}
        </div>
    )
}

export default PlatformLayout;