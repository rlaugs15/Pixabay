"use client";

import Image from "next/image";
import { useState } from "react";

interface ContentItemProps {
  isVideo: boolean;
  thumbnail: string;
  videoUrl: string;
  id: number;
}

export default function ContentItem({ isVideo, thumbnail, videoUrl, id }: ContentItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full"
    >
      {/* <img src={thumbnail} alt="썸네일" className="w-full" /> */}
      <Image
        src={thumbnail}
        alt="썸네일"
        width={400}
        height={300} // initial layout hint일 뿐, CSS에 의해 무시될 수 있다.
        className="w-full h-auto object-cover"
      />
      {isVideo && isHovered && (
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
