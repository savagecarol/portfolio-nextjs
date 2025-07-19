import Image from "next/image";
import Hero from "@/components/Hero";
import YouTube from "@/components/YouTube";
import Medium from "@/components/Medium";
import GitHub from "@/components/GitHub";
import MostViewedVideos from "@/components/MostViewedVideos";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <YouTube />
        <Medium />
        <GitHub />
        <MostViewedVideos />
        <Contact />
      </main>
    </div>
  );
}
