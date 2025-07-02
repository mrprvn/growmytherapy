// Use <img> instead of next/image for reliability

const AreasOfFocusPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F0E8] w-full mt-[75px]">
      {/* Areas of Focus Section */}
      <section className="py-10 px-4 sm:py-14 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl w-full">
          {/* Page Title */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-700 break-words">
              Areas of Focus
            </h1>
          </div>

          {/* Three Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-16 xl:gap-x-28">
            {/* Healthcare Providers and Students */}
            <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 px-2">
              <div className="w-full flex justify-center">
                <div
                  className="aspect-square w-64 xs:w-72 sm:w-80 md:w-96 lg:w-[22rem] xl:w-[24rem] rounded-full overflow-hidden bg-stone-200 shadow-lg flex items-center justify-center"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    src="/aof1.jpg"
                    alt="Healthcare providers and students"
                    className="object-cover w-full h-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      aspectRatio: "1 / 1"
                    }}
                  />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-stone-700 leading-tight break-words">
                Therapy for Healthcare Providers and Students
              </h2>
              <p className="text-stone-600 font-serif leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
                The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion
                fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in
                pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can
                address the unique stressors of your professional environment along with any challenges you may be
                facing in other areas of your life.
              </p>
            </div>

            {/* Trauma and Grief */}
            <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 px-2">
              <div className="w-full flex justify-center">
                <div
                  className="aspect-square w-64 xs:w-72 sm:w-80 md:w-96 lg:w-[22rem] xl:w-[24rem] rounded-full overflow-hidden bg-stone-200 shadow-lg flex items-center justify-center"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    src="/aof2.jpg"
                    alt="Trauma and grief therapy"
                    className="object-cover w-full h-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      aspectRatio: "1 / 1"
                    }}
                  />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-stone-700 leading-tight break-words">
                Therapy for Trauma and Grief
              </h2>
              <p className="text-stone-600 font-serif leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
                Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of
                someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy
                offers a supportive space to process these experiences, care for yourself amidst painful thoughts and
                emotions, and work toward a sense of grounding and meaning.
              </p>
            </div>

            {/* Second Generation Individuals */}
            <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 px-2">
              <div className="w-full flex justify-center">
                <div
                  className="aspect-square w-64 xs:w-72 sm:w-80 md:w-96 lg:w-[22rem] xl:w-[24rem] rounded-full overflow-hidden bg-stone-200 shadow-lg flex items-center justify-center"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    src="/aof3.jpg"
                    alt="Second generation individuals in immigrant families"
                    className="object-cover w-full h-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      aspectRatio: "1 / 1"
                    }}
                  />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-stone-700 leading-tight break-words">
                Therapy for Second Generation Individuals In Immigrant Families
              </h2>
              <p className="text-stone-600 font-serif leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
                Second-generation individuals in immigrant families, born in the U.S. to at least one parent born
                abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience
                can bring challenges such as feeling like a foreigner in your own country and navigating strained family
                relationships. Therapy offers a supportive space to explore and process this unique aspect of your
                identity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AreasOfFocusPage
