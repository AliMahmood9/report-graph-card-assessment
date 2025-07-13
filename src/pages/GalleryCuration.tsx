import GalleryCard from "@/components/GalleryCuration/GalleryCard";
import Header from "@/components/GalleryCuration/Header";
import Pagination from "@/components/Pagination";
import { useGalleryData } from "@/hooks/useGalleryData";

export default function GalleryCuration() {
  const { galleries } = useGalleryData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6">
      <Header />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleries.map((gallery) => (
          <GalleryCard key={gallery.title} {...gallery} />
        ))}
      </main>

      <Pagination
        totalPages={5}
        currentPage={2}
        onPageChange={(page) => console.log("Go to page:", page)}
      />
    </div>
  );
}
