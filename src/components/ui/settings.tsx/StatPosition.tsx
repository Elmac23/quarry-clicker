import Text from "@/components/Text";
import React from "react";

function StatPosition({ children }: React.PropsWithChildren) {
  return (
    <Text size="md" gutter={false}>
      {children}
    </Text>
  );
}

export default StatPosition;
