import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxwidthWrapper className="pb-24 pt-10 lg:flex sm:pb-32 lg:gap-x-0 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-10 hidden lg:block m-0 p-0">
                <Image
                  src="/cat-1.png"
                  alt="cat picture"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="relative w-full tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Story, Your Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Every scratch tells a story. Create your unique case with
                Scratch and carry your favourite memories in your hand!
              </p>

              <ul className="mt-8 space-y-2 text-left front-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-blue-600" />
                    High-quality, durable phone cases
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-blue-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-blue-600" />
                    All iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block object-cover rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="size-4 text-blue-600 fill-blue-600" />
                  <Star className="size-4 text-blue-600 fill-blue-600" />
                  <Star className="size-4 text-blue-600 fill-blue-600" />
                  <Star className="size-4 text-blue-600 fill-blue-600" />
                  <Star className="size-4 text-blue-600 fill-blue-600" />
                </div>
              </div>

              <p>
                <span className="font-semibold">1,250</span> satisfied customers
              </p>
            </div>
          </div>

          <div className="select-none col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="phone case mockup"
                width={120}
                height={100}
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                src="/line.png"
                alt="line"
                width={100}
                height={100}
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxwidthWrapper>
      </section>
    </div>
  );
}
