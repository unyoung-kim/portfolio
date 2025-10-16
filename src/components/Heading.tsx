import React from "react";

import { twMerge } from "tailwind-merge";

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        "font-crimson text-base md:text-xl lg:text-4xl font-bold text-primary",
        className
      )}
    >
      {children}
    </Tag>
  );
};
