"use client";
import { Addresses } from "@/components/addresses";
import { ContactDetails } from "@/components/contact-details";
import { Identification } from "@/components/identification";
import { Map } from "@/components/map";
import { PersonalDetails } from "@/components/personal-details";
import { Card } from "@nextui-org/react";

export default function PeoplePage() {
  return (
    <div className="flex p-6 gap-10 flex-wrap">
      <PersonalDetails />
      <Identification />
      <ContactDetails />
      <Addresses />
      <Map />
    </div>
  );
}
