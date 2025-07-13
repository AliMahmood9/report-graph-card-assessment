import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  placeholder = "Search...",
  className = "",
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={`relative w-full sm:w-[280px] ${className}`}>
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      <Input
        placeholder={placeholder}
        className="pl-4 pr-10 py-3 rounded-full border border-gray-300 focus-visible:ring-1 focus-visible:ring-gray-300"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
