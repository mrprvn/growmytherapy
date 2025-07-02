import AboutSection from "@/components/shared/about-section";
import AreasOfFocusPage from "@/components/shared/area-of-focus";
import ContactForm from "@/components/shared/contact-form";
import FAQ from "@/components/shared/faq";
import Header from "@/components/shared/header";
import HeroSection from "@/components/shared/hero-section";

export default function Home() {
  return (
    <div className="">
      <div className="w-full bg-[#F3F0E8] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-20 lg:py-16 space-y-8 sm:space-y-10 lg:space-y-14">
        <Header />
        <HeroSection />
      </div>
      <AboutSection/>
      <AreasOfFocusPage/>
      <FAQ/>
      <ContactForm/>
    </div>
  );
}
