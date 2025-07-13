import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MetricSelector() {
  return (
    <div className="w-90">
      <p className="text-sm text-gray-700 mb-1">Comparing</p>
      <Select>
        <SelectTrigger className="bg-white w-90 text-purple-800 font-bold border border-gray-300 rounded-md shadow-sm">
          <SelectValue placeholder="Page Visits" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="home">Home</SelectItem>
          <SelectItem value="products">Products</SelectItem>
          <SelectItem value="blog">Blog</SelectItem>
          <SelectItem value="contact">Contact</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
