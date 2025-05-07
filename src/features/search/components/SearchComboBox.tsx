import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { mediaOptions, SEARCH_IMAGE_TYPE_MAP, SEARCH_VIDEO_TYPE_MAP } from "../lib/content";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQueryParamsStore } from "@/store/queryStore";
import { ImageType, VideoType } from "@/services/apis/types/commonApi";
import { useSearchParams } from "react-router-dom";

export default function SearchComboBox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { setImageType, setVideoType, setType } = useQueryParamsStore();

  const setQueryParams = ({
    value,
    group,
  }: {
    value: string;
    label: string;
    group: "image" | "video";
  }) => {
    const newParams = new URLSearchParams(searchParams);

    if (group === "image") {
      newParams.set("type", "image");
      setType("image");
      newParams.set("image_type", value === "image_all" ? "all" : value);
      setImageType(value as ImageType);
      newParams.delete("video_type");
    }
    if (group === "video") {
      newParams.set("type", "video");
      setType("video");
      newParams.set("video_type", value === "video_all" ? "all" : value);
      setVideoType(value as VideoType);
      newParams.delete("image_type");
    }
    setSearchParams(newParams);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? mediaOptions.find((mediaOption) => mediaOption.value === value)?.label
            : "모든 이미지"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="미디어 옵션..." />
          <CommandList>
            <CommandEmpty>미디어 옵션이 없습니다.</CommandEmpty>
            <CommandGroup>
              {mediaOptions.map((mediaOption) => (
                <CommandItem
                  key={`${mediaOption.group}-${mediaOption.value}`}
                  value={mediaOption.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setQueryParams(mediaOption);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {mediaOption.icon}
                    <span>{mediaOption.label}</span>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === mediaOption.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
