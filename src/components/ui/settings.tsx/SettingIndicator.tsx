import { cn } from "@/lib/cn";
import React from "react";

type SettingIndicatorProps = {
  value: boolean;
};

function SettingIndicator({ value }: SettingIndicatorProps) {
  return (
    <div
      className={cn(
        "aspect-square ring-2 ring-primary-500 ring-offset-4 ring-offset-black size-4",
        value && "bg-primary-500"
      )}
    >
      {value}
    </div>
  );
}

export default SettingIndicator;
