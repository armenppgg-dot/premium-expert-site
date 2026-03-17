import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Reviews />
      <Faq />
      <Cta />
    </main>
  );
}
