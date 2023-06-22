"use client";
import PreFooterSection from "@/components/PreFooterSection/PreFooterSection";
import FaqSection from "@/components/FAQ/FaqSection";
import { useEffect } from "react";

export default function List() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/*<Header />*/}
      {/*<Merchants />*/}
      <PreFooterSection />
      <FaqSection />
    </>
  );
}
