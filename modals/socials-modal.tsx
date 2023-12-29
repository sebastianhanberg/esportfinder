import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"


interface SocialsModalProps {
  socialsData: {
    discord: string;
    twitch: string;
    steam: string;
  };
  setSocialsData: (data: any) => void;
}


const SocialsModal = ({
  socialsData,
  setSocialsData,
}: SocialsModalProps) => {
  const [open, setOpen] = useState(false)

  
  const handleSubmit = (event: any) => {
    event.preventDefault();    
    const formData = new FormData(event.target);
    const updatedSocialsData = {
      discord: formData.get('discord') || socialsData.discord,
      twitch: formData.get('twitch') || socialsData.twitch,
      steam: formData.get('steam') || socialsData.steam,
      
    };
    setSocialsData(updatedSocialsData);
    setTimeout(() => {
      setOpen(false); // Close the modal
      toast.success('Socials updated successfully!'); // Show success toast
    }, 0); 

    console.log(updatedSocialsData);
  };
    


    return (
        <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>Edit socials</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit socials</DialogTitle>
          <DialogDescription>
            Link your socials URL here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="discord" className="text-left ">
              Discord URL
            </Label>
            <Input
              id="discord"
              name="discord"
              defaultValue=""
              className="col-span-3"
            />
          </div>   

          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="steam" className="text-left ">
              Steam URL
            </Label>
            <Input
              id="steam"
              name="steam"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="twitch" className="text-left ">
              Twitch URL
            </Label>
            <Input
              id="twitch"
              name="twitch"
              defaultValue=""
              className="col-span-3"
            />
          </div>   
         
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    )
}

export default SocialsModal;