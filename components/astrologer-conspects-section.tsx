"use client"

import type { NextPage } from "next"
import BlockRow from "./block-row"

// Define the types
interface TranslationType {
  title: string
  description1: string
  description2: string
  description3: string
  price: string
  blocks: { title: string; description: string[] }[]
}

interface Translations {
  [key: string]: TranslationType
}

type Language = keyof typeof translations

export type AstrologerConspectsSectionType = {
  className?: string
  lang?: Language
}

// Mock translations object
const translations = {
  en: {
    title: "Astrologer's Notes",
    description1:
      "✓ Having all the astrologer's notes, you can easily start understanding your charts and the charts of your loved ones.",
    description2: "✓ Without fluff, all the most important, structured information collected over many years of work.",
    description3:
      "✓ You can take a personal consultation and I will teach you how to work with notes, templates, read your natal chart.",
    price: "The cost of one block of notes:",
    blocks: [
      {
        title: "Block I.",
        description: ["Zodiac signs, planets, elements, domiciles, ", "exaltations, falls, exiles, crosses"],
      },
      {
        title: "Block II.",
        description: ["Major aspects, planets in the shaft, retro planets"],
      },
      {
        title: "Block III.",
        description: ["Houses of the horoscope, rulers of houses"],
      },
      {
        title: "Block IV.",
        description: ["Progressions, directions, transits, solar return"],
      },
      {
        title: "Block V.",
        description: ["Moon phases, lunar eclipses, solar eclipses"],
      },
      {
        title: "Block VI.",
        description: ["Synastry, chart comparison, aspects in synastry"],
      },
      {
        title: "Block VII.",
        description: ["Sexpertise, composite, directions in composites"],
      },
      {
        title: "Block VIII.",
        description: ["Karmic astrology, aspects of karma"],
      },
      {
        title: "Block IX.",
        description: ["Psychological astrology, aspects in psychology"],
      },
      {
        title: "Block X.",
        description: ["Medical astrology, health, health aspects"],
      },
      {
        title: "Block XI.",
        description: ["Financial astrology, financial aspects"],
      },
      {
        title: "Block XII.",
        description: ["Esoteric astrology, aspects of spirituality"],
      },
    ],
  },
  ru: {
    title: "Конспекты астролога",
    description1:
      "✓ Имея все конспекты астролога, вы без труда сможете сами начать разбираться в своих картах и картах ваших близких.",
    description2: "✓ Без воды, всё самое важное , структурированная информация собрана за многие годы работы.",
    description3:
      "✓ Вы можете взять личную консультацию и я вас научу, как работать с конспектами, шаблонами, читать вашу натальную карту.",
    price: "Стоимость одного блока конспектов:",
    blocks: [
      {
        title: "Блок I.",
        description: ["Знаки зодиака, планеты, стихии, обители, ", "экзальтации, падения, изгнания, кресты"],
      },
      {
        title: "Блок II.",
        description: ["Мажорные аспекты, планеты в шахте, ретро планеты"],
      },
      {
        title: "Блок III.",
        description: ["Дома гороскопа, управители домов"],
      },
      {
        title: "Блок IV.",
        description: ["Прогрессии, дирекции, транзиты, соляр"],
      },
      {
        title: "Блок V.",
        description: ["Фазы Луны, лунные затмения, солнечные затмения"],
      },
      {
        title: "Блок VI.",
        description: ["Синастрия, сравнение карт, аспекты в синастрии"],
      },
      {
        title: "Блок VII.",
        description: ["Секспертиза, композит, дирекции в композитах"],
      },
      {
        title: "Блок VIII.",
        description: ["Кармическая астрология, аспекты кармы"],
      },
      {
        title: "Блок IX.",
        description: ["Психологическая астрология, аспекты в психологии"],
      },
      {
        title: "Блок X.",
        description: ["Медицинская астрология, здоровье, аспекты здоровья"],
      },
      {
        title: "Блок XI.",
        description: ["Финансовая астрология, аспекты финансов"],
      },
      {
        title: "Блок XII.",
        description: ["Эзотерическая астрология, аспекты духовности"],
      },
    ],
  },
  zh: {
    title: "占星师笔记",
    description1: "✓ 拥有所有占星师的笔记，您可以轻松开始理解自己的星盘和亲人的星盘。",
    description2: "✓ 没有废话，全是多年工作中收集的最重要、最有结构的信息。",
    description3: "✓ 您可以进行个人咨询，我会教您如何使用笔记、模板，阅读您的本命盘。",
    price: "一个笔记块的价格：",
    blocks: [
      {
        title: "第一块",
        description: ["星座、行星、元素、宫位、", "升降、陷落、流放、十字"],
      },
      {
        title: "第二块",
        description: ["主要相位、轴心行星、逆行行星"],
      },
      {
        title: "第三块",
        description: ["星盘宫位、宫位主宰"],
      },
      {
        title: "第四块",
        description: ["推运、行运、流年、太阳回归"],
      },
      {
        title: "第五块",
        description: ["月相、月食、日食"],
      },
      {
        title: "第六块",
        description: ["合盘、图表比较、合盘相位"],
      },
      {
        title: "第七块",
        description: ["性学专业、合成盘、合成盘行运"],
      },
      {
        title: "第八块",
        description: ["业力占星学、业力相位"],
      },
      {
        title: "第九块",
        description: ["心理占星学、心理学相位"],
      },
      {
        title: "第十块",
        description: ["医疗占星学、健康、健康相位"],
      },
      {
        title: "第十一块",
        description: ["财务占星学、财务相位"],
      },
      {
        title: "第十二块",
        description: ["密宗占星学、灵性相位"],
      },
    ],
  },
}

const AstrologerConspectsSection: NextPage<AstrologerConspectsSectionType> = ({ className = "", lang = "ru" }) => {
  const t = translations[lang]

  return (
    <section
      className={`self-stretch bg-oldlace flex flex-row items-end justify-start py-0 pl-40 pr-0 box-border gap-6 max-w-full text-left text-23xl text-dimgray-100 font-playfair-display mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:pb-5 mq1050:box-border ${className}`}
      data-scroll-to="astrologerConspectsSection"
    >
      <div className="flex-1 flex flex-col items-start justify-between py-10 px-0 box-border min-w-[480px] min-h-[1094px] max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border">
        <div className="self-stretch flex flex-col items-start justify-end gap-[26px] max-w-full">
          <h1 className="m-0 w-[546px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block max-w-full mq750:text-15xl mq450:text-6xl">
            {t.title}
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-0.5 box-border gap-[13px] max-w-full text-base text-dimgray-300 font-ibm-plex-sans">
            <div className="self-stretch relative inline-block">
              <p className="[margin-block-start:0] [margin-block-end:4px]">{t.description1}</p>
              <p className="[margin-block-start:0] [margin-block-end:4px]">{t.description2}</p>
              <p className="m-0">{t.description3}</p>
            </div>
            <div className="relative text-black inline-block max-w-full mt-4">
              <span className="font-medium">{`${t.price} `}</span>
              <span>1 250₽</span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-base text-black font-ibm-plex-sans">
            <div className="self-stretch flex flex-col items-start gap-[13px] justify-start max-w-full mq750:h-auto">
              {t.blocks.map((block, index) => (
                <BlockRow key={index} title={block.title} description={block.description} lang={lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1014px] w-[517px] flex flex-col items-start justify-center min-w-[517px] max-w-full mq750:min-w-full mq1225:hidden">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain mq1225:self-stretch mq1225:w-auto"
          loading="lazy"
          alt="Stack of books"
          src="/-----------------1-1-1@2x.png"
        />
      </div>
    </section>
  )
}

export default AstrologerConspectsSection
