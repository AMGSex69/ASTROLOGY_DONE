"use client"

import type { NextPage } from "next"
import { useRef } from "react"

const translations = {
  en: {
    greeting: "Greeting",
    hello: "Hello, friends!",
    aboutMe: "I am Oksana Yurlova, a practicing astrologer with experience in solving various client requests.",
    experience: "I have been consulting for over 5 years.",
    education:
      "I graduated from Elena Negrey's Professional School of Western Astrology. I studied at Konstantin Daragan's courses.",
    travel: "I travel a lot, having visited 56 countries.",
    certificates: "Certificates confirmed by a license from the Ministry of Education",
    howICanHelp: "How my consultations can help you:",
    services: [
      "I work for hire, I want my own business;",
      "Selecting a date for business registration;",
      "Bright events this year, forecast for the year;",
      "Profession for a child;",
      "Immigration, I want to move;",
      "The child does not speak, why;",
      "I want a divorce/or how to save my marriage;",
      "Where to look for my love;",
      "No children/but I want;",
      "I want an analysis of my wife/husband/friend/child/boss;",
      "My compatibility with another person;",
      "Where to develop a child: sections/circles;",
      "What is the best day for my date/marriage/car purchase/apartment/vacation/move;",
      "Understanding sexual, psychological interaction in a couple;",
      "Finances, income/loss of money in prognostics;",
      "Real estate transactions (rent/lease/purchase).",
    ],
  },
  ru: {
    greeting: "Приветствие",
    hello: "Здравствуйте, друзья!",
    aboutMe: "Я – Оксана Юрлова, практикующий астролог с опытом в решении самых разных клиентских запросов.",
    experience: "Консультирую более 5 лет.",
    education:
      "Закончила Профессиональную школу Западной Астрологии Елены Негрей. Обучалась на курсах Константина Дарагана.",
    travel: "Много путешествую, объездила 56 стран.",
    certificates: "Cертификаты, подтвержденные лицензией от Министерства образования",
    howICanHelp: "В чём вам помогут мои консультации:",
    services: [
      "Работаю по найму, хочу свой бизнес;",
      "Подбор даты оформления бизнеса;",
      "Яркие события в этом году, прогноз на год;",
      "Профессия для ребенка;",
      "Иммиграция, хочу переехать;",
      "Ребенок не говорит, почему;",
      "Хочу развод/или как сохранить свой брак;",
      "Где искать свою любовь;",
      "Нет детей/но хочу;",
      "Хочу анализ своей жены/мужа/друга/ребенка/ начальника;",
      "Моя совместимость с другим человеком;",
      "Где развивать ребенка: секции/кружки;",
      "Какой лучший день для моего свидания/ бракосочетания/ покупки машины/ квартиры/отпуска/переезда;",
      "Понимание сексуального, психологического взаимодействия в паре;",
      "Финансы, приход/потеря денег в прогностике;",
      "Сделки с недвижимостью (сдача/аренда/покупка).",
    ],
  },
  zh: {
    greeting: "问候",
    hello: "你好，朋友们！",
    aboutMe: "我是Oksana Yurlova，一位有经验的占星师，擅长解决各种客户需求。",
    experience: "我已经咨询超过5年了。",
    education: "我毕业于Elena Negrey的西方占星专业学校。我还在Konstantin Daragan的课程中学习。",
    travel: "我经常旅行，已经去过56个国家。",
    certificates: "经教育部认证的证书",
    howICanHelp: "我的咨询如何帮助你：",
    services: [
      "我是雇员，想要自己的事业；",
      "选择注册企业的日期；",
      "今年的重大事件，年度预测；",
      "孩子的职业；",
      "移民，我想搬家；",
      "孩子不说话，为什么；",
      "我想离婚/或如何挽救我的婚姻；",
      "在哪里寻找我的爱情；",
      "没有孩子/但我想要；",
      "我想分析我的妻子/丈夫/朋友/孩子/老板；",
      "我与他人的兼容性；",
      "在哪里发展孩子：兴趣班/圈子；",
      "我的约会/结婚/买车/买房/度假/搬家的最佳日子是什么时候；",
      "理解夫妻之间的性和心理互动；",
      "财务，预测中的收入/损失；",
      "房地产交易（出租/租赁/购买）。",
    ],
  },
}

type Language = keyof typeof translations

export type AboutMeSectionType = {
  className?: string
  lang?: Language
}

const AboutMeSection: NextPage<AboutMeSectionType> = ({ className = "", lang = "ru" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Use the translations based on the provided language, fallback to Russian if not provided
  const t = translations[lang] || translations.ru

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" })
    }
  }

  return (
    <section
      className={`self-stretch bg-oldlace flex flex-col items-start justify-start py-9 px-40 box-border gap-[22px] max-w-full text-left text-23xl text-dimgray-100 font-playfair-display mq750:py-[23px] mq750:px-20 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      data-scroll-to="aboutMeSection"
    >
      <h1 className="m-0 w-[357px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block max-w-full mq750:text-15xl mq450:text-6xl">
        {t.greeting}
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start gap-[119px] max-w-full text-xl text-black mq750:gap-[30px] mq1225:gap-[59px] mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[356px] max-w-full mq750:gap-5 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
            <div className="relative mq450:text-base">{t.hello}</div>
            <div className="self-stretch relative text-base font-ibm-plex-sans text-dimgray-300">
              <p className="[margin-block-start:0] [margin-block-end:14px]">{t.aboutMe}</p>
              <p className="[margin-block-start:0] [margin-block-end:14px]">{t.experience}</p>
              <p className="[margin-block-start:0] [margin-block-end:14px]">{t.education}</p>
              <p className="m-0">{t.travel}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[26px] max-w-full text-sm">
            <div className="flex flex-row items-center justify-start gap-2 max-w-full">
              {/* Left Arrow */}
              <img
                className="h-[25px] w-[25px] object-contain cursor-pointer"
                alt="Scroll Left"
                src="/certificate-images@2x.png"
                onClick={scrollLeft}
              />

              {/* Images Container */}
              <div
                className="w-[438.4px] overflow-hidden flex flex-row items-center justify-start gap-[58.4px] max-w-[calc(100%_-_66px)] mq750:gap-[29px]"
                ref={scrollContainerRef}
              >
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  loading="lazy"
                  alt="Certificate 1"
                  src="/1@2x.png"
                />
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  loading="lazy"
                  alt="Certificate 2"
                  src="/2@2x.png"
                />
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  loading="lazy"
                  alt="Certificate 3"
                  src="/3@2x.png"
                />
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  loading="lazy"
                  alt="Certificate 4"
                  src="/4@2x.png"
                />
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  loading="lazy"
                  alt="Certificate 5"
                  src="/5@2x.png"
                />
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  loading="lazy"
                  alt="Certificate 6"
                  src="/6@2x.png"
                />
                <img
                  className="self-stretch w-[107.2px] relative max-h-full shrink-0 object-cover min-h-[151px]"
                  alt="Certificate placeholder"
                  src="/certificate-placeholders@2x.png"
                />
              </div>

              {/* Right Arrow */}
              <div className="flex flex-row items-center justify-center py-5 px-0">
                <img
                  className="h-[25px] w-[25px] relative rounded-12xs-3 object-contain cursor-pointer"
                  alt="Scroll Right"
                  src="/polygon-1.svg"
                  onClick={scrollRight}
                />
              </div>
            </div>
            <div className="relative">{t.certificates}</div>
          </div>
        </div>
        <div className="w-[453px] flex flex-col items-start justify-start gap-[26px] min-w-[453px] max-w-full mq1050:min-w-full mq1225:flex-1">
          <div className="relative inline-block max-w-full mq450:text-base">{t.howICanHelp}</div>
          <div className="self-stretch relative text-base tracking-[-0.05px] text-dimgray-300 font-ibm-plex-sans">
            {t.services.map((service, index) => (
              <p key={index} className="[margin-block-start:0] [margin-block-end:4px]">
                <span className="font-medium font-ibm-plex-sans">✓</span>
                <span> {service}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
