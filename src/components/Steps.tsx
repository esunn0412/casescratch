"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Choose your own design",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final case",
    url: "/preview",
  },
];

const Steps = () => {
  const pathname = usePathname();

  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(i + 1).some((s) =>
          pathname.endsWith(s.url)
        );
        const imgPath = `/cat-${i + 1}.png`;

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div className="border-1 border-gray-100">
              <span
                className={cn(
                  "absolute left-0 top-0 w-1 h-full bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-zinc-700": isCurrent,
                    "bg-primary": isCompleted,
                  }
                )}
                aria-hidden="true"
              />

              <span
                className={cn(
                  i !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex-shrink-0">
                  <Image
                    src={imgPath}
                    className="flex h-20 w-20 object-contain items-center justify-center"
                    alt={step.name}
                    width={80}
                    height={80}
                  />
                </span>

                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
