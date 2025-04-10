"use client"

import type { NextPage } from "next"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const translations = {
  en: {
    title: "Yoga Retreats",
    individualRetreat: "Individual Retreat Tour",
    description:
      "If you want to stop and reboot, improve your mental and spiritual state, find answers, go into self-work, just relax, do a deep self-analysis under the guidance of masters using spiritual practices — join US.",
    mainGoal: "Main goal:",
    mainGoalDescription:
      "to cleanse the consciousness, physical body, through deep self-analysis, which leads to spiritual, mental and physical recovery.",
    features: [
      "Place of Power (away from society);",
      "Yoga;",
      "Meditations;",
      "Neurographics;",
      "Western astrology;",
      "Vegetarian food;",
      "Remote location;",
      "Healthy lifestyle;",
      "Practices;",
      "Island tour;",
      "Visiting temples and reserves;",
      "Qigong;",
      "Everyone chooses their own goal and type of retreat (spiritual, creative, biohacking).",
    ],
    checkInDates: "CHECK-IN ON DATES CONVENIENT FOR YOU!!!",
    learnMore: "Learn More",
    retreatProgram: "retreat program",
    sriLanka: "«Reboot in Sri Lanka»",
    india: "«India»",
    abkhazia: "«Abkhazia»",
    allInclusive: "(all inclusive)",
    plusTicketAndVisa: "+ flight ticket and visa",
  },
  ru: {
    title: "Йога-ретриты",
    individualRetreat: "Индивидуальный ретрит-тур",
    description:
      "Если вы хотите остановиться и перезагрузиться, улучшить своё душевное и духовное состояние, найти ответы, уйти в проработки, просто отдохнуть, сделать глубокий самоанализ под руководством мастеров с использованием духовных практик — присоединяйтесь к НАМ.",
    mainGoal: "Главная цель:",
    mainGoalDescription:
      "очистить сознание, физическое тело, посредством глубокого самоанализа, что приводит к духовному, ментальному и физическому восстановлению.",
    features: [
      "Место cилы (вдали от социума);",
      "Йога;",
      "Медитации;",
      "Нейрографика;",
      "Западная астрология;",
      "Вегетарианское питание;",
      "Удаленное место;",
      "Здоровый образ жизни;",
      "Практики;",
      "Путешествие по острову;",
      "Посещение храмов и заповедников;",
      "Цигун;",
      "Каждый выбирает свою цель и свой тип ретрита (духовный, творческий, биохакинг).",
    ],
    checkInDates: "ЗАЕЗД В УДОБНЫЕ ДЛЯ ВАС ДАТЫ!!!",
    learnMore: "Узнать подробнее",
    retreatProgram: "программа ретрита",
    sriLanka: "«Перезагрузка на Шри-Ланке»",
    india: "«Индия»",
    abkhazia: "«Абхазия»",
    allInclusive: "(всё включено)",
    plusTicketAndVisa: "+ авиабилет и виза",
  },
  zh: {
    title: "瑜伽静修",
    individualRetreat: "个人静修之旅",
    description:
      "如果您想停下来重新启动，改善您的心理和精神状态，寻找答案，进行自我工作，只是放松，在大师的指导下使用精神实践进行深度自我分析 — 加入我们。",
    mainGoal: "主要目标：",
    mainGoalDescription: "通过深度自我分析净化意识和身体，从而实现精神、心理和身体的恢复。",
    features: [
      "力量之地（远离社会）；",
      "瑜伽；",
      "冥想；",
      "神经图形学；",
      "西方占星术；",
      "素食；",
      "偏远地点；",
      "健康生活方式；",
      "实践；",
      "岛屿之旅；",
      "参观寺庙和自然保护区；",
      "气功；",
      "每个人都选择自己的目标和静修类型（精神、创意、生物黑客）。",
    ],
    checkInDates: "在您方便的日期入住！！！",
    learnMore: "了解更多",
    retreatProgram: "静修计划",
    sriLanka: "「斯里兰卡重启」",
    india: "「印度」",
    abkhazia: "「阿布哈兹」",
    allInclusive: "（全包）",
    plusTicketAndVisa: "+ 机票和签证",
  },
}

type Language = keyof typeof translations

export type AstroYogaSectionType = {
  className?: string
  lang?: Language
}

const RetreatPrices: NextPage<{
  className?: string
  priceDetails?: string
  prop?: string
  prop1?: string
  prop2?: string
  pdfFileName?: string
  lang: Language
}> = ({ className = "", priceDetails, prop, prop1, prop2, pdfFileName = "pdf.pdf", lang }) => {
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

const AstroYogaSection: NextPage<AstroYogaSectionType> = ({ className = "", lang = "ru" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = translations[lang]

  const images = [
    "/1-2@2x.png",
    "/2-2@2x.png",
    "/3-2@2x.png",
    "/4-1@2x.png",
    "/5-1@2x.png",
    "/6-1@2x.png",
    "/7-1@2x.png",
    "/8@2x.png",
    "/image-collection@2x.png",
    "/10@2x.png",
    "/image-collection1@2x.png",
    "/image-collection2@2x.png",
    "/image-collection3@2x.png",
    "/image-collection4@2x.png",
    "/image-collection5@2x.png",
    "/image-collection6@2x.png",
    "/image-collection7@2x.png",
    "/image-collection8@2x.png",
    "/image-collection9@2x.png",
    "/image-collection10@2x.png",
    "/image-collection11@2x.png",
    "/image-collection12@2x.png",
    "/image-collection13@2x.png",
    "/image-collection14@2x.png",
    "/image-collection15@2x.png",
    "/image-collection16@2x.png",
  ]

  const visibleImagesCount = 9
  const imageWidth = 100.5 // Adjusted image width in px
  const gapWidth = 24 // Gap between images in px
  const maxIndex = images.length - visibleImagesCount

  const moveGallery = (direction: "left" | "right") => {
    setCurrentIndex((prev) => {
      if (direction === "left") {
        return Math.max(prev - 1, 0)
      } else {
        return Math.min(prev + 1, maxIndex)
      }
    })
  }

  return (
    <section
      className={`self-stretch bg-beige-100 flex flex-col items-start justify-start py-10 px-40 box-border gap-6 max-w-full text-left text-3xl text-dimgray-100 font-playfair-display ${className}`}
      data-scroll-to="astroYogaSection"
    >
      <h1 className="m-0 tracking-wide font-normal">{t.title}</h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-base text-black font-ibm-plex-sans">
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-xl font-playfair-display">
          <div className="flex-1">{t.individualRetreat}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-dimgray-300">
          <div className="flex-1">{t.description}</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-6 gap-y-16 text-center text-xl">
          <RetreatPrices
            priceDetails="/1-1@2x.png"
            prop="170 000 ₽"
            prop1={t.allInclusive}
            prop2={t.sriLanka}
            pdfFileName="shrilanka.pdf"
            lang={lang}
          />
          <RetreatPrices
            priceDetails="/2-1@2x.png"
            prop="70 000 ₽"
            prop1={t.plusTicketAndVisa}
            prop2={t.india}
            pdfFileName="india.pdf"
            lang={lang}
          />
          <RetreatPrices
            priceDetails="/3-1@2x.png"
            prop="70 000 ₽"
            prop1={t.plusTicketAndVisa}
            prop2={t.abkhazia}
            pdfFileName="abkhazia.pdf"
            lang={lang}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[300px]">
            <div className="self-stretch">
              <span className="font-medium">{t.mainGoal}</span>
              <span className="text-dimgray-300"> {t.mainGoalDescription}</span>
            </div>
            <div className="self-stretch text-dimgray-300">
              {t.features.map((feature, index) => (
                <p key={index} className="m-0">
                  <span className="font-medium">✓</span> {feature}
                </p>
              ))}
            </div>
            <p className="m-0 self-stretch uppercase font-bold">{t.checkInDates}</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-14 gap-5 max-w-full">
          <button
            onClick={() => moveGallery("left")}
            className="cursor-pointer bg-transparent border-none p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (imageWidth + gapWidth)}px)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  className="w-[100.5px] flex-shrink-0 object-cover mr-6 last:mr-0"
                  loading="lazy"
                  alt={`Gallery image ${index + 1}`}
                  src={src || "/placeholder.svg"}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => moveGallery("right")}
            className="cursor-pointer bg-transparent border-none p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-between py-1 min-h-[62px]">
          <button className="cursor-pointer border-none py-5 px-9 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 shadow-md rounded-full flex items-center justify-center">
            <div className="text-sm uppercase font-medium text-black text-center">{t.learnMore}</div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AstroYogaSection
