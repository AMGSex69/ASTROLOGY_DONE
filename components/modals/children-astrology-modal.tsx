"use client"

import type { NextPage } from "next"

const translations = {
  en: {
    title: "Children's Astrology",
    description: "Every parent dreams that their child will grow up successful, active, and wealthy.",
    points: [
      "✓ Motivation for learning;",
      "✓ Selection of necessary clubs/sections;",
      "✓ Which sport to choose, directions for child development;",
      "✓ Career choice;",
      "✓ Key to behavior (how to find an approach to them);",
      "✓ Innate talents and abilities.",
    ],
    price: "Price:",
    priceValue: "5,000₽",
    format: "Format:",
    formatDescription:
      "consultations are held in video format, with live communication (Skype, Telegram, WhatsApp, Zoom, etc. + astrobook (printed summary of key points) + video consultations).",
    requiredData: "Data required for consultation:",
    dataPoints: [
      "✓ Year, month and date of birth;",
      "✓ City;",
      "✓ Time of birth from the tag or as told by mother (if there's no exact birth time, we do rectification).",
    ],
    order: "ORDER",
    giftCertificate: "GIFT CERTIFICATE",
  },
  ru: {
    title: "Детская астрология",
    description: "Каждый родитель мечтает, чтобы его ребенок вырос успешным, активным, богатым.",
    points: [
      "✓ Мотивация к учебе;",
      "✓ Выбор необходимых кружков/секций;",
      "✓ В какой спорт отдать, направления развития ребенка;",
      "✓ Выбор профессии;",
      "✓ Ключ к поведению (как найти к нему подход);",
      "✓ Врожденные таланты и способности.",
    ],
    price: "Стоимость:",
    priceValue: "5 000₽",
    format: "Формат:",
    formatDescription:
      "консультации проходят в видеоформате, при живом общении (Skype, Telegram, WhatsApp, Zoom и т.д. + astrobook (печатный конспект основных моментов) + видеоконсультации).",
    requiredData: "Для консультации необходимы данные:",
    dataPoints: [
      "✓ Год, месяц и дата рождения;",
      "✓ Город;",
      "✓ Время рождения по бирке или со слов мамы (если нет точного времени рождения, делаем ректификацию).",
    ],
    order: "ЗАКАЗАТЬ",
    giftCertificate: "Подарить сертификат",
  },
  zh: {
    title: "儿童占星术",
    description: "每个父母都梦想自己的孩子能够成长为成功、积极、富有的人。",
    points: [
      "✓ 学习动力；",
      "✓ 选择必要的俱乐部/部门；",
      "✓ 选择什么运动，孩子发展方向；",
      "✓ 职业选择；",
      "✓ 行为关键（如何找到接近他们的方法）；",
      "✓ 先天才能和能力。",
    ],
    price: "价格：",
    priceValue: "5,000₽",
    format: "形式：",
    formatDescription:
      "咨询以视频形式进行，通过实时交流（Skype、Telegram、WhatsApp、Zoom等 + astrobook（关键点的打印摘要）+ 视频咨询）。",
    requiredData: "咨询所需数据：",
    dataPoints: [
      "✓ 出生年、月、日；",
      "✓ 城市；",
      "✓ 出生时间（从标签或母亲所说，如果没有准确的出生时间，我们会进行校正）。",
    ],
    order: "订购",
    giftCertificate: "赠送礼券",
  },
}

type Language = keyof typeof translations

export type ChildrenAstrologyModalProps = {
  onClose?: () => void
  lang?: Language
}

const ChildrenAstrologyModal: NextPage<ChildrenAstrologyModalProps> = ({ onClose, lang = "ru" }) => {
  const t = translations[lang]

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
        <div className="relative font-semibold mq450:text-base">{t.title}</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq975:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[376px] max-w-full mq700:min-w-full">
            <div className="self-stretch relative text-dimgray-300">{t.description}</div>
            <div className="self-stretch relative text-dimgray-300">
              {t.points.map((item, index) => (
                <p key={index} className="[margin-block-start:0] [margin-block-end:13px]">
                  {item}
                </p>
              ))}
            </div>
            <div className="relative">
              <span className="font-medium">{`${t.price} `}</span>
              <span>{t.priceValue}</span>
            </div>
            <div className="self-stretch relative">
              <span>
                <span className="font-medium">{t.format}</span>
              </span>
              <span className="text-dimgray-300">
                <span>{` `}</span>
                <span>{t.formatDescription}</span>
              </span>
            </div>
            <div className="self-stretch relative inline-block">
              <p className="[margin-block-start:0] [margin-block-end:4px]">
                <span className="font-medium">
                  <span>{`${t.requiredData} `}</span>
                </span>
              </p>
              {t.dataPoints.map((item, index) => (
                <p key={index} className="[margin-block-start:0] [margin-block-end:4px] text-dimgray-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <img
            className="w-[342px] relative rounded-xl max-h-full object-cover max-w-full mq975:flex-1"
            loading="lazy"
            alt=""
            src="/rectangle-55@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <button className="h-[50px] px-[42px] rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center">
          <div className="self-stretch flex-1 relative font-medium text-mini">{t.order}</div>
        </button>
        <button className="h-[50px] px-4 rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap">
          <div className="self-stretch flex-1 relative uppercase font-medium text-mini">{t.giftCertificate}</div>
        </button>
      </div>
    </div>
  )
}

export default ChildrenAstrologyModal
