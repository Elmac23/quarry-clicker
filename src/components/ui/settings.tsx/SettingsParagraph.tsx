import Text from "@/components/Text";
import React from "react";

function SettingsParagraph({ children }: React.PropsWithChildren) {
  return (
    <Text size="xl" color="primary">
      {children}
    </Text>
  );
}

export default SettingsParagraph;
