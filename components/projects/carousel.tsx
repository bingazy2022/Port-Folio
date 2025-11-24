"use client";

import { urlFor } from "@/sanity/lib/image";
import { Loader } from "lucide-react";
import Image from "next/image";
import { FC, Suspense, useState } from "react";
import { Image as SanityImage } from "sanity";

interface CarouselProps {
  images: SanityImage[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentImage, setcurrentImage] = useState<string>(
    urlFor(images[0]).url()
  );
  return (
    <div className="space-y-2">
      <Image
        src={currentImage}
        alt="project"
        width={320}
        height={320}
        className="w-full max-h-[30rem] shadow"
      />
      <div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, index) => (
            <Suspense
              key={index}
              fallback={<Loader className="animate-spin" />}
            >
              <div className="w-full max-h-28 overflow-hidden">
                <Image
                  src={urlFor(img).url()}
                  alt="project"
                  width={120}
                  height={120}
                  className="opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer transition"
                  onClick={() => setcurrentImage(urlFor(img).url())}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
