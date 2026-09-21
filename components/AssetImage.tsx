"use client";

import Image from "next/image";
import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallback: React.ReactNode;
  priority?: boolean;
};

export function AssetImage({
  src,
  alt,
  width,
  height,
  className,
  fallback,
  priority = false,
}: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
