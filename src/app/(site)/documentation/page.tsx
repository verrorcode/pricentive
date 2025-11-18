import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Features | Pricentive",
};

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  );
}
