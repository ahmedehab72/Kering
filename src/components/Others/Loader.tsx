"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000); // 1 second fake load
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="flex items-center justify-center h-[700px]">
        <div className="loader"></div>
      </div>
    );
  }
  return <>{children}</>;
}
