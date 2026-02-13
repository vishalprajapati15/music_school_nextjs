import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grig-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
