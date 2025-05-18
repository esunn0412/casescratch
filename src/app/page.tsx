import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";

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
                    className="inline-block size-12 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.jpg"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block size-12 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.jpeg"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block size-12 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.jpeg"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block size-12 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block size-12 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpeg"
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

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxwidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our
              <span className="relative px-2">
                customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-600" />
              </span>
              say
            </h2>
            <Image
              src="/cat-2.png"
              width={96}
              height={96}
              alt="cat picture"
              className="order-0 lg:order-2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case is durable and I got so many compliments on it!
                  Had the case for two and a half months now and the{" "}
                  <span className="p-0.5 font-semibold underline decoration-blue-400 decoration-2">
                    picture is super clear
                  </span>
                  , the case I had before faded yellow after a couple weeks.
                  Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full object-cover"
                  src="/users/user-1.jpg"
                  alt="user image"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Lauren</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-blue-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
                <Star className="size-5 text-blue-600 fill-blue-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I usually keep my phone together with my keys in my
                  pocket and my last phonecases were pretty scratched up. This
                  one, besides a barely noticeable scratch on the corner,{" "}
                  <span className="p-0.5 font-semibold underline decoration-blue-400 decoration-2">
                    looks brand new even after half a year
                  </span>
                  . Thanks for the great case!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  className="rounded-full object-cover"
                  src="/users/user-5.jpeg"
                  alt="user image"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Frankie</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-blue-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxwidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
