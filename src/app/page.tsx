import Header from "@/components/Header/Header";
import Merchants from "@/components/Merchants/Merchants";
import Navbar from "@/components/Navbar/Navbar";
import PreFooterSection from "@/components/PreFooterSection/PreFooterSection";
import FaqSection from "@/components/FAQ/FaqSection";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ scrollSnapAlign: "none" }}>
        <Merchants />
        <PreFooterSection />
        <FaqSection />
      </div>
    </>
  );
}
