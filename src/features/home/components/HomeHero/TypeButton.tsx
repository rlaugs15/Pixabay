import { Button } from "@/components/ui/button";

interface TypeButtonProps {
  text: string;
  setTypeParamsClick: (value: string) => void;
}

export default function TypeButton({ text, setTypeParamsClick }: TypeButtonProps) {
  return (
    <Button onClick={() => setTypeParamsClick(text)} variant="ghost" className="rounded-3xl">
      {text}
    </Button>
  );
}
