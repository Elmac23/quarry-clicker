import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";
import React, { useCallback } from "react";

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
};

const sliderVariants = cva(
  "relative w-full appearance-none bg-yellow-300 border-2 border-yellow-700/50 ring-2 ring-black rounded-full cursor-pointer transition-all hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/50",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-6",
        lg: "h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const thumbVariants = cva(
  "absolute top-1/2 -translate-y-1/2 bg-yellow-600 border-2 border-yellow-800 ring-2 ring-black rounded-full transition-all hover:bg-yellow-700 hover:scale-110 active:bg-yellow-800 cursor-pointer",
  {
    variants: {
      size: {
        sm: "w-6 h-6 -ml-3",
        md: "w-8 h-8 -ml-4",
        lg: "w-10 h-10 -ml-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const labelVariants = cva(
  "jersey10 text-yellow-800 font-bold tracking-wide mb-2 block",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  size = "md",
  className,
  disabled = false,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.target.value));
    },
    [onChange]
  );

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <label className={labelVariants({ size })}>{label}</label>
          {showValue && (
            <span className={cn(labelVariants({ size }), "mb-0")}>
              {value}
              {max === 100 && min === 0 ? "%" : ""}
            </span>
          )}
        </div>
      )}

      <div className="relative">
        <div className={sliderVariants({ size })}>
          <div
            className="absolute top-0 left-0 h-full bg-yellow-500 border-r-2 border-yellow-600 rounded-l-full transition-all"
            style={{ width: `${percentage}%` }}
          />

          <div
            className={thumbVariants({ size })}
            style={{ left: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex justify-between mt-1">
        <span className="text-xs text-yellow-700 jersey10">{min}</span>
        <span className="text-xs text-yellow-700 jersey10">{max}</span>
      </div>
    </div>
  );
}

export default Slider;
