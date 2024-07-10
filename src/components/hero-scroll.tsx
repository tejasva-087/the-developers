"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import heroImg from "./assets/hero-ing.jpg";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Navigate with ease <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Explore freely
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={heroImg}
          alt="hero"
          height={420}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
