import ranks from "@/json/ranks.json";
import countries from '@/json/countries.json';
import roles from "@/json/roles.json";

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { toast } from "sonner";

interface ProfilePageModalProps {
  profileData: {
    name: string;
    gametag: string;
    game: string;
    role: string;
    rank: string;
    rating: string;
    country: string;
  };
  setProfileData: (data: any) => void;
}

type GameName = 'League of Legends' | 'Counter-Strike 2' | 'Fortnite' | 'Valorant';


const ProfilePageModal = ({
    profileData,
    setProfileData,   
}: ProfilePageModalProps) => {   

  const [open, setOpen] = useState(false);
  
  const [selectedGame, setSelectedGame] = useState<GameName | ''>('');('');
  const [selectedRank, setSelectedRank] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');

  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = {
      name: formData.get('name') || profileData.name,
      gametag: formData.get('gametag') || profileData.gametag,
      game: selectedGame,
      role: selectedRole,
      rank: selectedRank,
      rating: formData.get('rating') || profileData.rating,
      country: selectedCountry,
    };
    setProfileData(updatedData);
    setTimeout(() => {
      setOpen(false); // Close the modal
      toast.success('Profile updated successfully!'); // Show success toast
    }, 0); 

    console.log(updatedData);
    
};

const handleSelectChange = (value: string) => {
  setSelectedGame(value as GameName); // Cast the value to the GameName type
  setSelectedRank(''); // Reset rank when game changes
};

const handleRankChange = (value: string) => {
  setSelectedRank(value);
};
const handleRoleChange = (value: string) => {
  setSelectedRole(value);
};
<<<<<<< HEAD
=======

// const handleCountryChange = (event: any) => {
//   setSelectedCountry(event.target.value || ''); // Fallback to empty string if necessary
// };
>>>>>>> ee73d96f8dade0f06835448ba39850168a24c04c

const filteredCountries = searchTerm
    ? countries.filter(country => 
        country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;


  const handleCountrySelect = (value: any) => {
    setSelectedCountry(value);
    setSearchTerm(''); // Clear search term upon selection
  };

    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
          <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">

          <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <Label htmlFor="name" className="text-left mb-2" >
              Name
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue={profileData.name}
              className="col-span-3"
            />
          </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <Label htmlFor="gametag" className="text-left mb-2">
              Gametag
            </Label>
            <Input
              id="gametag"
              name="gametag"
              defaultValue={profileData.gametag}
              className="col-span-3"
            />
          </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
          <Select name="game" onValueChange={handleSelectChange} value={selectedGame}>
                <Label htmlFor="game" className="text-left mb-2">
              Game
            </Label>          
              <SelectTrigger>        
                <SelectValue placeholder="Choose your game.." />
              </SelectTrigger>        
              <SelectContent>
                <SelectGroup >
                  <SelectItem value="Counter-Strike 2">Counter-Strike 2</SelectItem>
                  <SelectItem value="Valorant">Valorant</SelectItem>
                  <SelectItem value="Fortnite">Fortnite</SelectItem>
                  <SelectItem value="League of Legends">Leauge of Legends</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
            </div>
          
          

            <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
          <Label htmlFor="Role" className="text-left mb-2">
              Role
            </Label>
          <Select
            name="Role"
            onValueChange={handleRoleChange}
            value={selectedRole}
          >
            <SelectTrigger>{selectedRole || "Choose your role..."}</SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selectedGame && roles[selectedGame]?.map((role: any) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
          <Label htmlFor="rank" className="text-left mb-2">
              Rank
            </Label>
          <Select
            name="rank"
            onValueChange={handleRankChange}
            value={selectedRank}
          >
            <SelectTrigger>{selectedRank || "Choose your rank..."}</SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selectedGame && ranks[selectedGame]?.map((rank: any) => (
                  <SelectItem key={rank} value={rank}>
                    {rank}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <Label htmlFor="rating" className="text-left mb-2">
              Rating
            </Label>
            <Input
              id="rating"
              name="rating"
              defaultValue={profileData.rating}
              className="w-full"
            />
          </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
          <Label htmlFor="rating" className="text-left mb-2">
              Country
            </Label>
          <Select name="country" onValueChange={handleCountrySelect} value={selectedCountry}>
            <SelectTrigger aria-label="Country">{selectedCountry || "Choose your country..."}</SelectTrigger>
           
            <SelectContent>
              <SelectGroup>
                {filteredCountries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
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

export default ProfilePageModal;