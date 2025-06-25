"use client";

import { Suspense } from "react";
import FillterTabSectionClient from "./FillterTabSectionClient";

export default function FillterTabSection() {
  return (
    <Suspense>
      <FillterTabSectionClient />
    </Suspense>
  );
}
