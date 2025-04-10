"use client"

import type { NextPage } from "next"
import Image from "next/image"

const translations = {
  en: {
    retreatProgram: "retreat program",
  },
  ru: {
    retreatProgram: "программа ретрита",
  },
  zh: {
    retreatProgram: "静修计划",
  },
}

type Language = keyof typeof translations

export type RetreatPricesType = {
  className?: string
  priceDetails?: string
  prop?: string
  prop1?: string
  prop2?: string
  pdfFileName?: string
  lang?: Language
}

const RetreatPrices: NextPage<RetreatPricesType> = ({
  className = "",
  priceDetails,
  prop,
  prop1,
  prop2,
  pdfFileName = "pdf.pdf",
  lang = "ru",
}) => {
  const t = translations[lang]

  const handleProgramClick = () => {
    if (pdfFileName) {
      window.open(`${pdfFileName}`, "_blank")
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-between gap-3 w-full max-w-sm mx-auto text-center text-black font-ibm-plex-sans ${className}`}
    >
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
        <Image src={priceDetails || "/placeholder.svg"} alt="" layout="fill" objectFit="cover" loading="lazy" />
      </div>
      <div className="w-full space-y-1">
        <p className="text-xl lg:text-2xl">{prop}</p>
        <p className="text-xl lg:text-2xl">{prop1}</p>
      </div>
      <div onClick={handleProgramClick} className="w-full cursor-pointer">
        <div className="inline-block rounded-full bg-oldlace px-4 py-2 text-sm uppercase">
          <p className="m-0">{t.retreatProgram}</p>
          <p className="m-0">{prop2}</p>
        </div>
      </div>
    </div>
  )
}

export default RetreatPrices
