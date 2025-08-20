import { useAppDispatch } from "@/hooks/redux";
import { SettingsStateBooleanKey, toggleSetting } from "@/store/settings";
import React from "react";

type SettingsInputProps = React.PropsWithChildren & {
  field: SettingsStateBooleanKey;
};

function SettingsInput({ field, children }: SettingsInputProps) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="flex items-center gap-4 mb-2 select-none cursor-pointer"
      onClick={() => dispatch(toggleSetting(field))}
    >
      {children}
    </div>
  );
}

export default SettingsInput;
