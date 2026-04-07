import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Clients />
      <Background />
      <Services />
      <Subscribe />
    </main>
  );
}
