import Image from "next/image";
import Hero from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ImpactStats } from "./components/ImpactStats";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyChooseUs />
      <ImpactStats />
      <Testimonials />
      <CTA />
    </>
  );
}
