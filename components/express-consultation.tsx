"use client"

import type { NextPage } from "next"

const translations = {
  en: {
    expressConsultation: "Express consultation",
    duration: "Duration:",
    minutes: "30 minutes",
    price: "Price:",
    description:
      "During the consultation, we will discuss one specific question of your choice. You will receive clear recommendations on how to act in your situation.",
  },
  ru: {
    expressConsultation: "Экспресс-консультация",
    duration: "Длительность:",
    minutes: "30 минут",
    price: "Стоимость:",
    description:
      "На консультации мы разберем один конкретный вопрос на ваш выбор. Вы получите четкие рекомендации, как действовать в вашей ситуации.",
  },
  zh: {
    expressConsultation: "快速咨询",
    duration: "时长：",
    minutes: "30分钟",
    price: "价格：",
    description: "在咨询期间，我们将讨论您选择的一个具体问题。您将收到关于如何在您的情况下行动的明确建议。",
  },
}

type Language = keyof typeof translations

export type ContainerType = {
  lang: Language
  className?: string
}

const Container: NextPage<ContainerType> = ({ lang, className = "" }) => {
  const t = translations[lang]

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[280px] max-w-full text-23xl text-dimgray-100 font-playfair-display ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit tracking-[0.05em] font-normal font-inherit mq450:text-6xl mq750:text-15xl">
        {t.expressConsultation}
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-mini text-black font-ibm-plex-sans">
        <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
          <div className="relative font-medium">{t.duration}</div>
          <div className="flex-1 relative">{t.minutes}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
          <div className="relative font-medium">{t.price}</div>
          <div className="flex-1 relative">3 000₽ | 35$</div>
        </div>
      </div>
      <div className="self-stretch relative text-base text-dimgray-300">{t.description}</div>
    </div>
  )
}

export default Container
