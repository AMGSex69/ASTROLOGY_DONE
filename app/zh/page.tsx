"use client"

import { useState, useEffect } from "react"
import HeroSection from "../../components/hero-section"
import AboutMeSection from "../../components/about-me-section"
import ServicesSection from "../../components/services-section"
import AstrologerConspectsSection from "../../components/astrologer-conspects-section"
import AstroYogaSection from "../../components/astro-yoga-section"
import FooterContent from "../../components/footer-content"
import ContactInfo from "../../components/contact-info"

const translations = {
  en: {
    schoolName: "Oksana Yurlova's School of Astrology",
    designCredit: "Website design and creation - asyama",
  },
  ru: {
    schoolName: "Школа Астрологии Оксаны Юрловой",
    designCredit: "Дизайн и создание сайта - asyama",
  },
  zh: {
    schoolName: "奥克萨娜·尤尔洛娃占星学校",
    designCredit: "网站设计和制作 - asyama",
  },
}

export default function ChinesePage() {
  // State to hold the current year
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

  // Update the current year when the component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const t = translations.zh

  return (
    <div className="w-full relative bg-oldlace overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border leading-[normal] tracking-[normal]">
      <HeroSection />
      <AboutMeSection lang="zh" />
      <ServicesSection lang="zh" />
      <AstrologerConspectsSection lang="zh" />
      <AstroYogaSection lang="zh" />
      <footer className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full text-center text-base text-black font-ibm-plex-sans">
        <div
          className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-10 px-40 box-border gap-40 max-w-full mq750:gap-20 mq750:pl-20 mq750:pr-20 mq750:box-border mq450:gap-10 mq450:pl-5 mq450:pr-5 mq450:box-border"
          data-scroll-to="infoContainer"
        >
          <FooterContent lang="zh" />
          <ContactInfo lang="zh" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
          <div className="w-[339px] relative inline-block">
            <p className="m-0">{`© ${currentYear} ${t.schoolName}`}</p>
            <p className="m-0">{t.designCredit}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
