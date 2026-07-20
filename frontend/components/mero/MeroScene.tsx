import Image from "next/image";
import { getMeroAsset } from "@/lib/mero/manifest";

const SIZE_PX = {
  sm: 80,
  md: 140,
  lg: 200,
  xl: 280,
} as const;

interface Props {
  id: string;
  size?: keyof typeof SIZE_PX;
  className?: string;
  priority?: boolean;
}

export function MeroScene({ id, size = "md", className, priority }: Props) {
  const asset = getMeroAsset(id);
  if (!asset) return null;

  const px = SIZE_PX[size];
  const src = `/mero/${asset.category}/${asset.id}.${asset.ext}`;
  const shouldPrioritize = priority ?? asset.priority === "high";

  return (
    <Image
      src={src}
      alt={asset.alt}
      width={px}
      height={px}
      priority={shouldPrioritize}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
