"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowUpCircleIcon } from "lucide-react";
import { use, useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isOverScreen, setIsOverScreen] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOverScreen(window.scrollY > 80);
    });
  }, []);
  return (
    <Button
      size="icon"
      className={cn(
        "fixed bottom-12  md:bottom-8 end-6 md:end-12 transition-transform duration-300 hover:scale-110 z-99",
        !isOverScreen && "opacity-0 translate-y-6 pointer-events-none"
      )}
      onClick={() => window.scrollTo(0, 0)}
    >
      {" "}
      <ArrowUpCircleIcon className="size-6" />{" "}
    </Button>
  );
};
export default ScrollToTop;
