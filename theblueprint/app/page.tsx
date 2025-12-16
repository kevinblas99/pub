import Hero from "@/components/Hero";
import Intro from "@/components/Introduction";
import Agenda from "@/components/Agenda";
import Speakers from "@/components/Speakers";
import EventDetails from "@/components/EventDetails";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Agenda />
      <Speakers />
      <EventDetails />
      <FAQSection />
    </>
  );
}