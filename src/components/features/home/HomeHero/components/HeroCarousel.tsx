"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ImagesResponse } from "@/types/api/image";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface HeroCarouselProps {
  images: ImagesResponse;
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
      className="w-full h-full aspect-[16/9] overflow-hidden"
    >
      <CarouselContent>
        {images?.hits.map((image) => (
          <CarouselItem key={image.id} className="relative w-full h-auto aspect-[16/9]">
            <Image
              src={image.largeImageURL}
              alt={`id-${image.id}`}
              loading="eager"
              fetchPriority="high"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
