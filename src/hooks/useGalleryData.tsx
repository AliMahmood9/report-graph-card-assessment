import outfit1 from "@/assets/sample-profile.png";
import outfit2 from "@/assets/sample-profile.png";
import outfit3 from "@/assets/sample-profile.png";
import { useEffect, useState } from "react";

interface Gallery {
  title: string;
  outfits: number;
  issues: number;
  unpublished: number;
  notes: number;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  mainImage: string;
  backgroundImage1: string;
  backgroundImage2: string;
}

export const useGalleryData = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);

  useEffect(() => {
    const dummyData: Gallery[] = [
      {
        title: "Spring Is In the Air",
        outfits: 5,
        issues: 6,
        unpublished: 4,
        notes: 0,
        createdAt: "Feb 19, 2025",
        createdBy: "Jane Doe",
        modifiedAt: "Mar 24, 2025",
        modifiedBy: "Jane Doe",
        mainImage: outfit1,
        backgroundImage1: outfit2,
        backgroundImage2: outfit3,
      },
      {
        title: "Office Ready",
        outfits: 15,
        issues: 3,
        unpublished: 2,
        notes: 1,
        createdAt: "Feb 21, 2025",
        createdBy: "John Smith",
        modifiedAt: "Mar 27, 2025",
        modifiedBy: "John Smith",
        mainImage: outfit1,
        backgroundImage1: outfit2,
        backgroundImage2: outfit3,
      },
      {
        title: "Day To Night",
        outfits: 30,
        issues: 4,
        unpublished: 1,
        notes: 2,
        createdAt: "Feb 25, 2025",
        createdBy: "Alex Johnson",
        modifiedAt: "Apr 01, 2025",
        modifiedBy: "Alex Johnson",
        mainImage: outfit1,
        backgroundImage1: outfit2,
        backgroundImage2: outfit3,
      },
      {
        title: "Casual Wear",
        outfits: 30,
        issues: 4,
        unpublished: 1,
        notes: 2,
        createdAt: "Feb 25, 2025",
        createdBy: "Alex Johnson",
        modifiedAt: "Apr 01, 2025",
        modifiedBy: "Alex Johnson",
        mainImage: outfit1,
        backgroundImage1: outfit2,
        backgroundImage2: outfit3,
      },
      {
        title: "Night Wears",
        outfits: 30,
        issues: 4,
        unpublished: 1,
        notes: 2,
        createdAt: "Feb 25, 2025",
        createdBy: "Alex Johnson",
        modifiedAt: "Apr 01, 2025",
        modifiedBy: "Alex Johnson",
        mainImage: outfit1,
        backgroundImage1: outfit2,
        backgroundImage2: outfit3,
      },
      {
        title: "Day To Night",
        outfits: 30,
        issues: 4,
        unpublished: 1,
        notes: 2,
        createdAt: "Feb 25, 2025",
        createdBy: "Alex Johnson",
        modifiedAt: "Apr 01, 2025",
        modifiedBy: "Alex Johnson",
        mainImage: outfit1,
        backgroundImage1: outfit2,
        backgroundImage2: outfit3,
      },
    ];

    setTimeout(() => {
      setGalleries(dummyData);
    }, 300);
  }, []);

  return { galleries };
};
