import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const boxVariants = cva("box", {
  variants: {
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid",
      "inline-grid": "inline-grid",
      hidden: "hidden",
    },
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
    },
    p: {
      none: "p-0",
      xs: "p-1",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
      "2xl": "p-10",
    },
    m: {
      none: "m-0",
      xs: "m-1",
      sm: "m-2",
      md: "m-4",
      lg: "m-6",
      xl: "m-8",
      "2xl": "m-10",
      auto: "m-auto",
    },
    w: {
      auto: "w-auto",
      full: "w-full",
      screen: "w-screen",
      min: "w-min",
      max: "w-max",
      fit: "w-fit",
    },
    h: {
      auto: "h-auto",
      full: "h-full",
      screen: "h-screen",
      min: "h-min",
      max: "h-max",
      fit: "h-fit",
    },
  },
  defaultVariants: {
    // display: "block",
  },
});

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  as?: React.ElementType;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      display,
      direction,
      align,
      justify,
      wrap,
      gap,
      p,
      m,
      w,
      h,
      as: Comp = "div",
      ...props
    },
    ref
  ) => {
    const Component = Comp as React.ElementType;

    return (
      <Component
        className={cn(
          boxVariants({
            display,
            direction,
            align,
            justify,
            wrap,
            gap,
            p,
            m,
            w,
            h,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Box.displayName = "Box";

export { Box, boxVariants };
