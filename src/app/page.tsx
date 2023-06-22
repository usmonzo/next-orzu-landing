import Header from "@/components/Header/Header";
import Merchants from "@/components/Merchants/Merchants";
import PreFooterSection from "@/components/PreFooterSection/PreFooterSection";
import FaqSection from "@/components/FAQ/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <Merchants />
      <PreFooterSection />
      <FaqSection />
    </>
  );
}
