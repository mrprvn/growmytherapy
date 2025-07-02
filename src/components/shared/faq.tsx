"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openItems, setOpenItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqData = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "24-hour notice required.",
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-2 sm:px-4 md:px-8 w-full"
    >
      <div className="mx-auto w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2c5e7e] text-center mb-10 sm:mb-14 md:mb-16 leading-tight">
          Frequently Asked Questions
        </h2>

        <div className="mb-8 sm:mb-10">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif text-[#2c5e7e] mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
            Therapy
          </h3>

          <div className="divide-y divide-[#2c5e7e]">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-[#2c5e7e] last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-start sm:items-center gap-3 sm:gap-5 cursor-pointer py-4 sm:py-6 text-left hover:text-sage transition-colors duration-200 focus:outline-none"
                  style={{ minHeight: "3rem" }}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="p-1.5 sm:p-2 rounded-full border border-[#2c5e7e] flex-shrink-0">
                    <ChevronRight
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-[#2c5e7e] flex-shrink-0 transition-transform duration-200 ${
                        openItems.includes(index) ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif text-[#2c5e7e] leading-relaxed break-words">
                    {faq.question}
                  </p>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index) ? "max-h-[700px] pb-4 sm:pb-6" : "max-h-0"
                  }`}
                  aria-hidden={!openItems.includes(index)}
                >
                  <div className="ml-8 sm:ml-12 pr-2 sm:pr-4">
                    <p className="text-[#2c5e7e] font-sans leading-relaxed text-sm xs:text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
