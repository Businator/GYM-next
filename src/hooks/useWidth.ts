"use client";

import { useEffect, useState } from "react";

export const useWidth = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileWidth;
};
