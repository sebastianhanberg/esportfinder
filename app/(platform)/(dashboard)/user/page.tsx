"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ProfilePageModal from "@/modals/profile-modal"
import SocialsModal from "@/modals/socials-modal"
import { useState } from "react"
import { FaSteam, FaTwitch, FaDiscord } from "react-icons/fa";


const ProfilePage = () => {

  const [profileData, setProfileData] = useState({
    name: "",
    gametag: "",
    game: "",
    role: "",
    rank: "",
    rating: "",
    country: "",
});

const [socialsData, setSocialsData] = useState({
  discord: "",
  twitch: "",
  steam: "",
}); 

    return (
        <div>            
            <div className="flex items-center justify-center">
            <div className="p-20 bg-neutral border border-neutral/20 shadow-sm rounded-md">
                <h1>

                <Button variant="outline">
                    Upload Image
                </Button>
                </h1>
            </div>
            <div className="pl-6">
           
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-md font-semibold text-left">
              Socials
            </Label>
            <div className="text-sm flex flex-row gap-2">
  {socialsData.discord && (
    <a href={socialsData.discord} target="_blank" rel="noopener noreferrer">
      <FaDiscord className="w-8 h-8 hover:text-black/80 hover:scale-105"/>
    </a>
  )}
  {socialsData.twitch && (
    <a href={socialsData.twitch} target="_blank" rel="noopener noreferrer">
      <FaTwitch className="w-8 h-8 hover:text-black/80 hover:scale-105"/>
    </a>
  )}
  {socialsData.steam && (
    <a href={socialsData.steam} target="_blank" rel="noopener noreferrer">
      <FaSteam className="w-8 h-8 hover:text-black/80 hover:scale-105"/>
    </a>
  )}
</div>
          <SocialsModal socialsData={socialsData} setSocialsData={setSocialsData}/>
          </div>
        </div>
    </div>
        <div className="w-full flex items-start">
        <div className="grid gap-6 py-4">
        <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Name: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.name}
           </p>
          </div>
          <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Gametag: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.gametag}
           </p>
          </div>
          <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Game: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.game}
           </p>
          </div>
          <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Role: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.role}
           </p>
          </div>
          <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Rank: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.rank}
           </p>
          </div>
          <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Rating: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.rating}
           </p>
          </div>
          <div className="flex w-full items-center gap-4">
           <h2 className="text-md font-semibold">
            Country: 
           </h2>
           <p className="text-sm w-full text-neutral-800/70" >
            {profileData.country}
           </p>
          </div>
          </div>
        </div>

        <div className="w-full flex py-6">
        <ProfilePageModal profileData={profileData} 
        setProfileData={setProfileData} />

        </div>
            
      
              </div>
    )
}

export default ProfilePage;