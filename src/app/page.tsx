import FeaturesAndServices from "@/components/FeaturesAndServices";
import Hero from "@/components/Hero";
import HotPackages from "@/components/HotPackages";

import { PackagesList } from "@/components/PackageList";
import DestinationSlider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationSlider />
      <HotPackages />
      <FeaturesAndServices />
      <PackagesList />
    </>
  );
}
