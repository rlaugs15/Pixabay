"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface SearchSubmitClientProps {
  getValue: () => string;
}

export default function SearchSubmitClient({ getValue }: SearchSubmitClientProps) {
  const router = useRouter();

  const handleClick = () => {
    const query = getValue();
    if (query.trim()) router.push(`/search/${query}`);
  };

  return (
    <Button type="submit" className="rounded-3xl m-0.5" onClick={handleClick}>
      검색
    </Button>
  );
}
