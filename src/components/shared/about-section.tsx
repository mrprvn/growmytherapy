import Image from "next/image"

const AboutSection = () => {
  return (
    <div className="bg-[#FEFEFE]">
      <section className="py-16 px-4 sm:py-24 sm:px-6 md:py-32 md:px-8 lg:py-40 lg:px-12 border-b border-black max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-8 lg:gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end order-1 md:order-2">
              <h1 className="text-2xl font-semibold font-serif text-[#7E7E6B] mb-6 md:hidden">
                About Dr. Jennifer Hahm
              </h1>
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-[350px] lg:w-96 lg:h-[550px] overflow-hidden bg-stone-200 shadow-lg">
                <Image
                  src="/portrait.jpg"
                  alt="Dr. Jennifer Hahm"
                  height={550}
                  width={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl font-semibold font-serif text-[#7E7E6B] mb-6 md:mb-10 hidden md:block">
              Dr. Serena Blake, PsyD
              </h1>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-base sm:text-lg font-serif">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
