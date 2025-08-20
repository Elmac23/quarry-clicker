"use client";

import { useCrafting } from "@/hooks/useCrafting";
import React from "react";

function Page() {
  const data = useCrafting();
  return <pre>{JSON.stringify(data, null, 3)}</pre>;
}

export default Page;
