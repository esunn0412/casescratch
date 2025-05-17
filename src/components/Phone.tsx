import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  imgClassName?: string;
  dark?: boolean;
}
const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
        className="pointer-events-none z-50 select-none"
        width={500}
        height={500}
      />
      <div className="absolute -z-10 inset-0">
        <Image
          width={500}
          height={500}
          className="object-cover h-full"
          src={imgSrc}
          alt="overlaid phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
