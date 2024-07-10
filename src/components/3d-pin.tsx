"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

import monthly from "./assets/monthlySubscription.gif";
import yearly from "./assets/yearlySubscription.jpg";

export function AnimatedPin() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center flex-col ">
      <p className="text-6xl text-teal-500 mb-6">Subscriptions</p>
      <div className="flex items-center justify-center">
        <PinContainer title="Buy Service" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              24$ / Month
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Monthly subscription.</span>
            </div>
            <Image
              src={monthly}
              alt="hero"
              height={420}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </div>
        </PinContainer>
        <PinContainer title="Buy Service" href="#">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              240$ / Year
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Yearly subscription.</span>
            </div>
            <Image
              src={yearly}
              alt="hero"
              height={420}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
