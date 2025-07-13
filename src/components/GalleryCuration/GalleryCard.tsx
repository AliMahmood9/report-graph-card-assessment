import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
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
};

export default function GalleryCard({
  title,
  outfits,
  issues,
  unpublished,
  notes,
  createdAt,
  createdBy,
  modifiedAt,
  modifiedBy,
  mainImage,
  backgroundImage1,
  backgroundImage2,
}: Props) {
  return (
    <div className="w-full max-w-[350px] mx-auto">
      <Card className="rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <CardHeader className="border-b border-blue-500">
          <CardTitle className="text-base font-semibold text-blue-600">
            {title}
          </CardTitle>
        </CardHeader>

        <div className="flex justify-center mt-2 relative">
          <div className="relative w-[140px] h-[180px]">
            <img
              src={backgroundImage1}
              alt=""
              className="absolute left-2 top-2 w-full h-full object-contain opacity-70 scale-95"
            />
            <img
              src={backgroundImage2}
              alt=""
              className="absolute -left-2 top-3 w-full h-full object-contain opacity-50 scale-90"
            />
            <img
              src={mainImage}
              alt="Outfit"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>

          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {outfits} Total Outfits
          </span>
        </div>

        <div className="flex justify-around text-center mt-10 px-4">
          <div>
            <p className="text-xs text-gray-700 mt-1 mb-1">Issues</p>
            <div className="bg-black text-white w-6 h-6 rounded-full mx-auto text-xs flex items-center justify-center">
              {issues}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-700 mt-1 mb-1">Unpublished</p>
            <div className="bg-pink-200 text-pink-800 w-6 h-6 rounded-full mx-auto text-xs flex items-center justify-center">
              {unpublished}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-700 mt-1 mb-1">Notes</p>
            <div className="bg-gray-200 text-gray-800 w-6 h-6 rounded-full mx-auto text-xs flex items-center justify-center">
              {notes}
            </div>
          </div>
        </div>

        <div className="flex gap-6 text-[11px] border-t border-gray-200 text-gray-600 mt-4 px-4 pb-2">
          <div className="mt-4">
            <p>Created</p>
            <p className="font-medium text-gray-900">{createdAt}</p>
            <p>{createdBy}</p>
          </div>
          <div className="mt-4">
            <p>Modified</p>
            <p className="font-medium text-gray-900">{modifiedAt}</p>
            <p>{modifiedBy}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
