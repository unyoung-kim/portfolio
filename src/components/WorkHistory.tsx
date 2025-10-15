"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40">{item.date}</Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm text-neutral-500 mb-2">
              {item.location}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.responsibilities.map((responsibility, index) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-2 items-start my-2">
      <div className="w-2 h-2 bg-neutral-300 rounded-full mt-2 flex-shrink-0" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
