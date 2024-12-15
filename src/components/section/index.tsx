import Image from "next/image";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

interface SectionProps {
  title: string;
  children?: ReactNode;
  imageUrl: string;
  reverse?: boolean; // If true, swaps the image and text positions
  className?: string;
}
export function Section({
  title,
  children,
  imageUrl,
  className,
  reverse = false,
}: SectionProps) {
  return (
    <section className={cn("text-xl", className)}>
      <div className="container mx-auto py-11">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-100">{title}</h2>
        </div>

        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          <div className="flex-1">
            <Image
              src={imageUrl}
              alt={title}
              className="h-auto w-full object-cover md:h-full"
            />
          </div>

          <div className="flex-1 space-y-4 px-6 md:px-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
