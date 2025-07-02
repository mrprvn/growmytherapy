"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Info } from "lucide-react"

const ContactForm = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
    consent: false,
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      ref={sectionRef}
      className="py-10 xs:py-14 sm:py-20 md:py-24 lg:py-32 px-2 xs:px-4 sm:px-6 md:px-8 bg-[#F3F0E8] w-full"
    >
      <div className="mx-auto w-full max-w-[98vw] xs:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="bg-gray-50 rounded-2xl border-2 border-gray-300 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-md">
          <div className="text-center mb-6 xs:mb-8">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-serif text-sage mb-4 xs:mb-6">
              Get In Touch
            </h2>
            <p className="text-[#2c5e7e] font-sans leading-relaxed text-base xs:text-lg">
              Simply fill out the brief fields below and Dr. Hahm will be in touch with you soon, usually within one
              business day. This form is safe, private, and completely free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 xs:space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-[#2c5e7e] font-sans font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-3 xs:px-4 py-2 xs:py-3 border-2 border-gray-300 rounded-lg focus:border-sage focus:ring-0 bg-white text-[#2c5e7e] placeholder-gray-400 text-sm xs:text-base"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[#2c5e7e] font-sans font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 xs:px-4 py-2 xs:py-3 border-2 border-gray-300 rounded-lg focus:border-sage focus:ring-0 bg-white text-[#2c5e7e] placeholder-gray-400 text-sm xs:text-base"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-[#2c5e7e] font-sans font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 234-5678"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-3 xs:px-4 py-2 xs:py-3 border-2 border-gray-300 rounded-lg focus:border-sage focus:ring-0 bg-white text-[#2c5e7e] placeholder-gray-400 text-sm xs:text-base"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-[#2c5e7e] font-sans font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-3 xs:px-4 py-2 xs:py-3 border-2 border-gray-300 rounded-lg focus:border-sage focus:ring-0 bg-white text-[#2c5e7e] placeholder-gray-400 min-h-[90px] xs:min-h-[120px] resize-none text-sm xs:text-base"
                required
              />
            </div>

            {/* Preferred Contact Time */}
            <div>
              <label htmlFor="preferredTime" className="block text-[#2c5e7e] font-sans font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                Preferred Contact Time
              </label>
              <Input
                id="preferredTime"
                type="text"
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                value={formData.preferredTime}
                onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                className="w-full px-3 xs:px-4 py-2 xs:py-3 border-2 border-gray-300 rounded-lg focus:border-sage focus:ring-0 bg-white text-[#2c5e7e] placeholder-gray-400 text-sm xs:text-base"
              />
              <p className="text-xs xs:text-sm text-gray-600 mt-1 font-sans">
                Let us know when you're typically available for a call or consultation
              </p>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label htmlFor="preferredMethod" className="block text-[#2c5e7e] font-sans font-medium mb-1 xs:mb-2 text-sm xs:text-base">
                Preferred Contact Method
              </label>
              <Select
                value={formData.preferredMethod}
                onValueChange={(value) => handleInputChange("preferredMethod", value)}
              >
                <SelectTrigger className="w-full px-3 xs:px-4 py-2 xs:py-3 border-2 border-gray-300 rounded-lg focus:border-sage focus:ring-0 bg-white text-[#2c5e7e] text-sm xs:text-base">
                  <SelectValue placeholder="Select preferred method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="text">Text Message</SelectItem>
                  <SelectItem value="either">Either Email or Phone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-start py-3 xs:py-4 gap-2 xs:gap-0">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 xs:p-4 flex flex-row items-center gap-2 xs:gap-3 w-full xs:w-auto">
                <Checkbox id="recaptcha" className="border-2 border-[#2c5e7e] fill-[#2c5e7e]" />
                <label htmlFor="recaptcha" className="text-[#2c5e7e] font-sans text-sm xs:text-base">
                  I'm not a robot
                </label>
                <div className="ml-2 xs:ml-4 text-xs text-[#2c5e7e] hidden xs:block">
                  <div>reCAPTCHA</div>
                  <div>Privacy - Terms</div>
                </div>
              </div>
              <div className="block xs:hidden mt-2 text-xs text-[#2c5e7e] ml-1">
                <div>reCAPTCHA</div>
                <div>Privacy - Terms</div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full cursor-pointer bg-[#144232] hover:bg-[#22362f] py-4 xs:py-5 px-3 xs:px-4 rounded-lg text-base xs:text-lg font-sans font-medium"
            >
              Submit
            </Button>

            {/* Consent Notice */}
            <div className="flex items-start gap-2 xs:gap-3 pt-3 xs:pt-4">
              <Info className="h-4 w-4 xs:h-5 xs:w-5 text-[#2c5e7e] flex-shrink-0 mt-0.5" />
              <p className="text-xs xs:text-sm text-[#2c5e7e] font-sans leading-relaxed">
                By clicking submit you consent to receive texts and emails from Dr. Jennifer Hahm
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm