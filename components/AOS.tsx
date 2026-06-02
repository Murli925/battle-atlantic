"use client";

import dynamic from "next/dynamic";

const AOSInit = dynamic(() => import("@/components/AOSInit"), {
  ssr: false,
});

export default function ClientAOS() {
  return <AOSInit />;
}