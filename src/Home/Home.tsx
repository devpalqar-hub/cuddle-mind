import HeroSection from "./heroSection/heroSection";
import PhoneShowcase from "./PhoneShowcase/PhoneShowcase";
import ImpactSection from "./ImpactSection/ImpactSection";
import AboutUs from "../aboutUs/AboutUs";
import MentalHealthStats from "../mentalHealthStatus/MentalHealthStats";
import Professionals from "../professionals/Professionals";
import Testimonials from "../testimonials/Testimonials";
import SpeakExperts from "../speakExperts/SpeakExperts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhoneShowcase />
      <ImpactSection />
      <AboutUs/>
      <MentalHealthStats/>
      <Professionals/>
      <Testimonials />
      <SpeakExperts/>
    </>
  );
}
