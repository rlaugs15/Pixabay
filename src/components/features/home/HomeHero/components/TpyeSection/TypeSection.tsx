"use client";

import { btnTexts } from "@/lib/contents";
import TypeButtonClient from "./TypeButtonClient";

export default function TypeSection() {
  return (
    <section className="w-full text-sm font-semibold flex justify-center flex-wrap">
      {btnTexts.map((text) => (
        <TypeButtonClient key={text[0]} text={text} />
      ))}
    </section>
  );
}
