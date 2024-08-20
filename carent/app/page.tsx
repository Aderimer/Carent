import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Popular />
      <GetApp />
      <Newsletter />
    </>
  );
}
