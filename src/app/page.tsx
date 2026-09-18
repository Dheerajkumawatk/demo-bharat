import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WorksGrid } from "@/components/home/WorksGrid";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { NewsPreview } from "@/components/home/NewsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <WorksGrid />
      <GalleryPreview />
      <NewsPreview />
    </>
  );
}
