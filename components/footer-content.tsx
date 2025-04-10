"use client"

import type { NextPage } from "next"
import Image from "next/image"

const translations = {
  en: {
    name: "AKSANA YURLOVA",
    title: "YOUR ASTROLOGER",
  },
  ru: {
    name: "АКСАНА ЮРЛОВА",
    title: "ВАШ АСТРОЛОГ",
  },
  zh: {
    name: "阿克萨娜·尤尔洛娃",
    title: "您的占星师",
  },
}

type Language = keyof typeof translations

export type FooterContentType = {
  className?: string
  lang?: Language
}

const FooterContent: NextPage<FooterContentType> = ({ className = "", lang = "ru" }) => {
  const t = translations[lang]

  return (
    <div
      className={`h-[154.3px] w-[167px] flex flex-col items-start justify-start gap-[5.3px] text-left text-base-8 text-dimgray-200 font-playfair-display ${className}`}
    >
      <div className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full">
        <Image src="/vectors.svg" alt="" layout="fill" objectFit="contain" loading="lazy" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-4">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6.6px]">
          <div className="relative">{t.name}</div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[47px]">
            <div className="h-[0.9px] w-[41.3px] relative border-gray border-t-[0.9px] border-solid box-border" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pl-[47px] pr-12 text-3xs-2">
        <div className="relative inline-block min-w-[72.3px]">{t.title}</div>
      </div>
    </div>
  )
}

export default FooterContent
