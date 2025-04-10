"use client"

import type { NextPage } from "next"
import { useState } from "react"
import ExpressConsultation1 from "./express-consultation1"
import AstrologicalForecast from "./astrological-forecast"
import { Modal } from "./ui/modal"
import KarmaModal from "./modals/karma-modal"
import BusinessConsultationModal from "./modals/business-consultation-modal"
import ChildrenAstrologyModal from "./modals/children-astrology-modal"
import ExpressConsultationModal from "./modals/express-consultation-modal"
import CalendarsModal from "./modals/calendars-modal"
import AstrologicalConsultationModal from "./modals/astrological-consultation-modal"

// Добавляем новые типы модальных окон
type ModalType =
	| "karma"
	| "businessConsultation"
	| "childrenAstrology"
	| "expressConsultation"
	| "calendars"
	| "astrologicalConsultation"
	| "yearlyForecast"
	| "compatibility"
	| "careerGuidance"
	| "relocation"
	| "dateSelection"
	| "medicalAstrology"
	| "gemstoneAstrology"
	| "rectification"
	| "natalChart"
	| "correctiveAstrology"
	| "annualSupport"
	| null

const translations = {
	en: {
		title: "My Services",
		karma: "KARMA",
		karmicHoroscope: "Karmic Horoscope",
		learnMore: "Learn More",
		order: "ORDER",
		giftCertificate: "GIFT CERTIFICATE",
		format: "Format:",
		formatDescription:
			"consultations are held in video format, with live communication (Skype, Telegram, WhatsApp, Zoom, etc. + astrobook (printed summary of key points) + video consultations).",
		requiredData: "Data required for consultation:",
		dataPoints: [
			"✓ Year, month and date of birth;",
			"✓ City;",
			"✓ Time of birth from the tag or as told by mother (if there's no exact birth time, we do rectification).",
		],
		price: "Price:",
		// Описания для модальных окон
		yearlyForecast: {
			title: "Astrological forecast for 1 year. Solar Return",
			description: [
				"✓ Forecast for the year from birthday to birthday;",
				"✓ Favorable and unfavorable periods;",
				"✓ Recommendations for the year;",
				"✓ Forecast for all areas of life (health, finance, relationships, career, etc.);",
				"✓ Recommendations for the year.",
			],
		},
		compatibility: {
			title: "Compatibility Horoscope",
			description: [
				"✓ Compatibility in all areas of life;",
				"✓ Psychological compatibility;",
				"✓ Sexual compatibility;",
				"✓ Compatibility in everyday life;",
				"✓ Compatibility in business;",
				"✓ Compatibility in friendship;",
				"✓ Compatibility in marriage;",
				"✓ Compatibility in parenting.",
			],
		},
		careerGuidance: {
			title: "Career guidance. Career choice",
			description: [
				"✓ Suitable professions;",
				"✓ Talents and abilities;",
				"✓ Recommendations for career development;",
				"✓ Favorable periods for career changes;",
				"✓ Recommendations for career growth.",
			],
		},
		relocation: {
			title: "Relocation and Immigration Horoscope",
			description: [
				"✓ Favorable countries and cities for relocation;",
				"✓ Favorable periods for relocation;",
				"✓ Recommendations for adaptation in a new place;",
				"✓ Forecast for all areas of life after relocation.",
			],
		},
		dateSelection: {
			title: "Selection of important date",
			description: [
				"✓ Selection of favorable date for important events;",
				"✓ Selection of favorable date for business registration;",
				"✓ Selection of favorable date for marriage;",
				"✓ Selection of favorable date for moving;",
				"✓ Selection of favorable date for surgery;",
				"✓ Selection of favorable date for travel.",
			],
		},
		medicalAstrology: {
			title: "Medical Astrology",
			description: [
				"✓ Health assessment;",
				"✓ Predisposition to diseases;",
				"✓ Recommendations for health improvement;",
				"✓ Favorable periods for treatment;",
				"✓ Recommendations for prevention.",
			],
		},
		gemstoneAstrology: {
			title: "Gemstone Astrology. Magical power of stones",
			description: [
				"✓ Selection of stones according to the natal chart;",
				"✓ Recommendations for wearing stones;",
				"✓ Favorable periods for purchasing stones;",
				"✓ Recommendations for stone activation.",
			],
		},
		rectification: {
			title: "Rectification. Exact birth time",
			description: [
				"✓ Determination of exact birth time;",
				"✓ Analysis of important life events;",
				"✓ Determination of ascendant and houses;",
				"✓ Recommendations based on the rectified chart.",
			],
		},
		natalChart: {
			title: "Natal chart",
			description: [
				"✓ Analysis of the natal chart;",
				"✓ Character traits;",
				"✓ Talents and abilities;",
				"✓ Life purpose;",
				"✓ Karmic tasks;",
				"✓ Recommendations for personal development.",
			],
		},
		correctiveAstrology: {
			title: "Corrective Astrology",
			description: [
				"✓ Analysis of problem areas;",
				"✓ Recommendations for correction;",
				"✓ Selection of favorable periods for changes;",
				"✓ Recommendations for personal development.",
			],
		},
		annualSupport: {
			title: "Annual support",
			description: [
				"✓ Regular consultations throughout the year;",
				"✓ Analysis of current transits;",
				"✓ Recommendations for important decisions;",
				"✓ Support in difficult periods;",
				"✓ Answers to questions as they arise.",
			],
		},
	},
	ru: {
		title: "Мои услуги",
		karma: "KARMA",
		karmicHoroscope: "Кармический гороскоп",
		learnMore: "Узнать подробнее",
		order: "ЗАКАЗАТЬ",
		giftCertificate: "Подарить сертификат",
		format: "Формат:",
		formatDescription:
			"консультации проходят в видеоформате, при живом общении (Skype, Telegram, WhatsApp, Zoom и т.д. + astrobook (печатный конспект основных моментов) + видеоконсультации).",
		requiredData: "Для консультации необходимы данные:",
		dataPoints: [
			"✓ Год, месяц и дата рождения;",
			"✓ Город;",
			"✓ Время рождения по бирке или со слов мамы (если нет точного времени рождения, делаем ректификацию).",
		],
		price: "Стоимость:",
		// Описания для модальных окон
		yearlyForecast: {
			title: "Астрологический прогноз на 1 год. Соляр",
			description: [
				"✓ Прогноз на год от дня рождения до дня рождения;",
				"✓ Благоприятные и неблагоприятные периоды;",
				"✓ Рекомендации на год;",
				"✓ Прогноз по всем сферам жизни (здоровье, финансы, отношения, карьера и т.д.);",
				"✓ Рекомендации на год.",
			],
		},
		compatibility: {
			title: "Гороскоп совместимости",
			description: [
				"✓ Совместимость по всем сферам жизни;",
				"✓ Психологическая совместимость;",
				"✓ Сексуальная совместимость;",
				"✓ Совместимость в быту;",
				"✓ Совместимость в бизнесе;",
				"✓ Совместимость в дружбе;",
				"✓ Совместимость в браке;",
				"✓ Совместимость в воспитании детей.",
			],
		},
		careerGuidance: {
			title: "Профориентация. Выбор профессии",
			description: [
				"✓ Подходящие профессии;",
				"✓ Таланты и способности;",
				"✓ Рекомендации по развитию карьеры;",
				"✓ Благоприятные периоды для смены карьеры;",
				"✓ Рекомендации по карьерному росту.",
			],
		},
		relocation: {
			title: "Гороскоп переезда и иммиграции",
			description: [
				"✓ Благоприятные страны и города для переезда;",
				"✓ Благоприятные периоды для переезда;",
				"✓ Рекомендации по адаптации на новом месте;",
				"✓ Прогноз по всем сферам жизни после переезда.",
			],
		},
		dateSelection: {
			title: "Подбор важной даты",
			description: [
				"✓ Подбор благоприятной даты для важных событий;",
				"✓ Подбор благоприятной даты для регистрации бизнеса;",
				"✓ Подбор благоприятной даты для бракосочетания;",
				"✓ Подбор благоприятной даты для переезда;",
				"✓ Подбор благоприятной даты для операции;",
				"✓ Подбор благоприятной даты для путешествия.",
			],
		},
		medicalAstrology: {
			title: "Медицинская астрология",
			description: [
				"✓ Оценка здоровья;",
				"✓ Предрасположенность к заболеваниям;",
				"✓ Рекомендации по улучшению здоровья;",
				"✓ Благоприятные периоды для лечения;",
				"✓ Рекомендации по профилактике.",
			],
		},
		gemstoneAstrology: {
			title: "Геммоастрология. Волшебная сила камней",
			description: [
				"✓ Подбор камней по натальной карте;",
				"✓ Рекомендации по ношению камней;",
				"✓ Благоприятные периоды для приобретения камней;",
				"✓ Рекомендации по активации камней.",
			],
		},
		rectification: {
			title: "Ректификация. Точное время рождения",
			description: [
				"✓ Определение точного времени рождения;",
				"✓ Анализ важных событий жизни;",
				"✓ Определение асцендента и домов;",
				"✓ Рекомендации на основе ректифицированной карты.",
			],
		},
		natalChart: {
			title: "Натальная карта",
			description: [
				"✓ Анализ натальной карты;",
				"✓ Черты характера;",
				"✓ Таланты и способности;",
				"✓ Предназначение;",
				"✓ Кармические задачи;",
				"✓ Рекомендации по личностному развитию.",
			],
		},
		correctiveAstrology: {
			title: "Коррекционная астрология",
			description: [
				"✓ Анализ проблемных сфер;",
				"✓ Рекомендации по коррекции;",
				"✓ Подбор благоприятных периодов для изменений;",
				"✓ Рекомендации по личностному развитию.",
			],
		},
		annualSupport: {
			title: "Годовое сопровождение",
			description: [
				"✓ Регулярные консультации в течение года;",
				"✓ Анализ текущих транзитов;",
				"✓ Рекомендации по важным решениям;",
				"✓ Поддержка в сложные периоды;",
				"✓ Ответы на вопросы по мере их возникновения.",
			],
		},
	},
	zh: {
		title: "我的服务",
		karma: "业力",
		karmicHoroscope: "业力星盘",
		learnMore: "了解更多",
		order: "订购",
		giftCertificate: "赠送礼券",
		format: "形式：",
		formatDescription:
			"咨询以视频形式进行，通过实时交流（Skype、Telegram、WhatsApp、Zoom等 + astrobook（关键点的打印摘要）+ 视频咨询）。",
		requiredData: "咨询所需数据：",
		dataPoints: [
			"✓ 出生年、月、日；",
			"✓ 城市；",
			"✓ 出生时间（从标签或母亲所说，如果没有准确的出生时间，我们会进行校正）。",
		],
		price: "价格：",
		// Описания для модальных окон на китайском
		yearlyForecast: {
			title: "一年占星预测。太阳回归",
			description: [
				"✓ 从生日到生日的年度预测；",
				"✓ 有利和不利时期；",
				"✓ 年度建议；",
				"✓ 生活各方面的预测（健康、财务、关系、职业等）；",
				"✓ 年度建议。",
			],
		},
		compatibility: {
			title: "兼容性星盘",
			description: [
				"✓ 生活各方面的兼容性；",
				"✓ 心理兼容性；",
				"✓ 性兼容性；",
				"✓ 日常生活兼容性；",
				"✓ 商业兼容性；",
				"✓ 友谊兼容性；",
				"✓ 婚姻兼容性；",
				"✓ 育儿兼容性。",
			],
		},
		careerGuidance: {
			title: "职业指导。职业选择",
			description: [
				"✓ 适合的职业；",
				"✓ 才能和能力；",
				"✓ 职业发展建议；",
				"✓ 职业变动的有利时期；",
				"✓ 职业晋升建议。",
			],
		},
		relocation: {
			title: "搬迁和移民星盘",
			description: [
				"✓ 适合搬迁的国家和城市；",
				"✓ 搬迁的有利时期；",
				"✓ 新环境适应建议；",
				"✓ 搬迁后生活各方面的预测。",
			],
		},
		dateSelection: {
			title: "选择重要日期",
			description: [
				"✓ 为重要事件选择有利日期；",
				"✓ 为商业注册选择有利日期；",
				"✓ 为婚礼选择有利日期；",
				"✓ 为搬家选择有利日期；",
				"✓ 为手术选择有利日期；",
				"✓ 为旅行选择有利日期。",
			],
		},
		medicalAstrology: {
			title: "医学占星术",
			description: ["✓ 健康评估；", "✓ 疾病倾向；", "✓ 改善健康的建议；", "✓ 治疗的有利时期；", "✓ 预防建议。"],
		},
		gemstoneAstrology: {
			title: "宝石占星术。石头的魔力",
			description: ["✓ 根据本命盘选择宝石；", "✓ 佩戴宝石的建议；", "✓ 购买宝石的有利时期；", "✓ 激活宝石的建议。"],
		},
		rectification: {
			title: "校正。精确出生时间",
			description: ["✓ 确定精确出生时间；", "✓ 分析重要生活事件；", "✓ 确定上升星座和宫位；", "✓ 基于校正星盘的建议。"],
		},
		natalChart: {
			title: "本命星盘",
			description: [
				"✓ 本命星盘分析；",
				"✓ 性格特点；",
				"✓ 才能和能力；",
				"✓ 生命目的；",
				"✓ 业力任务；",
				"✓ 个人发展建议。",
			],
		},
		correctiveAstrology: {
			title: "矫正占星术",
			description: ["✓ 问题领域分析；", "✓ 矫正建议；", "✓ 选择变化的有利时期；", "✓ 个人发展建议。"],
		},
		annualSupport: {
			title: "年度支持",
			description: [
				"✓ 全年定期咨询；",
				"✓ 当前行运分析；",
				"✓ 重要决策建议；",
				"✓ 困难时期的支持；",
				"✓ 随时解答问题。",
			],
		},
	},
}

type Language = keyof typeof translations

export type ServicesSectionType = {
	className?: string
	lang?: Language
}

const ServicesSection: NextPage<ServicesSectionType> = ({ className = "", lang = "ru" }) => {
	const [activeModal, setActiveModal] = useState<ModalType>(null)
	const t = translations[lang]

	const openModal = (type: ModalType) => {
		setActiveModal(type)
	}

	const closeModal = () => {
		setActiveModal(null)
	}

	// Общий компонент для модальных окон, которые еще не имеют специального компонента
	const GenericModal = ({
		title,
		price,
		description,
		image,
	}: { title: string; price: string; description: string[]; image?: string }) => (
		<div className="flex flex-col">
			<div className="w-full flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
				<div className="relative font-semibold mq450:text-base">{title}</div>
				<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-6 gap-y-[22px] max-w-full text-base font-ibm-plex-sans">
					<div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[335px] max-w-full">
						<div className="self-stretch relative text-dimgray-300">
							{description.map((item, index) => (
								<p key={index} className="[margin-block-start:0] [margin-block-end:4px]">
									{item}
								</p>
							))}
						</div>
						<div className="relative">
							<span className="font-medium">{t.price} </span>
							<span>{price}</span>
						</div>
						<div className="self-stretch relative">
							<span>
								<span className="font-medium">{t.format}</span>
							</span>
							<span className="text-dimgray-300">
								<span> </span>
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
					{image && (
						<img
							className="w-[342px] relative rounded-xl max-h-full object-cover max-w-full"
							loading="lazy"
							alt=""
							src={image || "/placeholder.svg"}
						/>
					)}
				</div>
			</div>
			<div className="flex flex-row gap-4 mt-6">
				<button className="h-[50px] w-[159px] rounded-31xl bg-beige-100 overflow-hidden flex items-center justify-center">
					<span className="font-medium text-mini text-center">{t.order}</span>
				</button>
				<button className="h-[50px] w-[215px] rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden flex items-center justify-center">
					<span className="uppercase font-medium text-mini text-center">{t.giftCertificate}</span>
				</button>
			</div>
		</div>
	)

	// Функция для получения заголовка модального окна в зависимости от типа и языка
	const getModalTitle = (type: ModalType): string => {
		if (!type) return ""
		return t[type]?.title || ""
	}

	// Функция для получения цены модального окна в зависимости от типа
	const getModalPrice = (type: ModalType): string => {
		switch (type) {
			case "yearlyForecast":
				return "10 000₽ | 110$"
			case "compatibility":
				return "8 000₽ | 90$"
			case "careerGuidance":
				return "5 000₽ | 55$"
			case "relocation":
				return "8 000₽ | 90$"
			case "dateSelection":
				return "5 000₽ | 55$"
			case "medicalAstrology":
				return "10 000₽ | 110$"
			case "gemstoneAstrology":
				return "10 000₽ | 110$"
			case "rectification":
				return "от 3 000₽ | 35$"
			case "natalChart":
				return "от 8 000₽ | 90$"
			case "correctiveAstrology":
				return "от 8 000₽ | 90$"
			case "annualSupport":
				return "от 40 000₽ | 440$"
			default:
				return ""
		}
	}

	// Функция для получения изображения модального окна в зависимости от типа
	const getModalImage = (type: ModalType): string => {
		switch (type) {
			case "yearlyForecast":
				return "/image-2@2x.png"
			case "compatibility":
				return "/image-3@2x.png"
			case "careerGuidance":
				return "/image-5@2x.png"
			case "relocation":
				return "/image-6@2x.png"
			case "dateSelection":
				return "/image-7@2x.png"
			case "medicalAstrology":
				return "/image-8@2x.png"
			case "gemstoneAstrology":
				return "/image-9@2x.png"
			case "rectification":
				return "/image-10@2x.png"
			case "natalChart":
				return "/image-11@2x.png"
			case "correctiveAstrology":
				return "/image-12@2x.png"
			case "annualSupport":
				return "/image-13@2x.png"
			default:
				return ""
		}
	}

	return (
		<>
			<section
				className={`self-stretch bg-beige-100 flex flex-col items-start justify-start py-10 px-40 gap-10 text-left text-23xl text-dimgray-100 font-playfair-display mq750:gap-5 mq750:pl-20 mq750:pr-20 mq750:box-border mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1225:pt-[26px] mq1225:pb-[26px] mq1225:box-border ${className}`}
				data-scroll-to="servicesSection"
			>
				<h1 className="m-0 w-[262px] relative text-inherit tracking-[0.05em] font-normal font-[inherit] inline-block mq750:text-15xl mq450:text-6xl">
					{t.title}
				</h1>
				<div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-6 gap-y-[22.7px] min-h-[1882px] text-center text-xl text-black">
					<ExpressConsultation1
						image="/image@2x.png"
						prop={lang === "ru" ? "Астрологическая" : lang === "en" ? "Astrological" : "占星"}
						prop1={lang === "ru" ? "консультация" : lang === "en" ? "consultation" : "咨询"}
						prop2="от 3 000₽ | 35$"
						lang={lang}
						onClick={() => openModal("astrologicalConsultation")}
					/>
					<ExpressConsultation1
						image="/image-1@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Бизнес-консультация." : lang === "en" ? "Business consultation." : "商业咨询。"}
						prop1={lang === "ru" ? "Деньги" : lang === "en" ? "Money" : "金钱"}
						prop2="5 000₽ | 55$"
						lang={lang}
						onClick={() => openModal("businessConsultation")}
					/>
					<AstrologicalForecast
						image="/image-2@2x.png"
						prop={
							lang === "ru"
								? "Астрологический прогноз на 1 год. Соляр"
								: lang === "en"
									? "Astrological forecast for 1 year. Solar Return"
									: "一年占星预测。太阳回归"
						}
						prop1="10 000₽ | 110$"
						lang={lang}
						onClick={() => openModal("yearlyForecast")}
					/>
					<div
						className="h-[442px] w-[262px] rounded-xl bg-oldlace overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-[26px] box-border gap-[26px] text-mini text-darksalmon font-ibm-plex-sans cursor-pointer"
						onClick={() => openModal("karma")}
					>
						<div className="self-stretch flex-1 flex flex-row items-center justify-center pt-[84.5px] px-5 pb-[84px] bg-[url('/imagetext@3x.png')] bg-cover bg-no-repeat bg-[top]">
							<div className="relative font-semibold inline-block min-w-[53px]">{t.karma}</div>
						</div>
						<div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[13px] text-xl text-black font-playfair-display">
							<div className="self-stretch relative font-semibold mq450:text-base">
								<p className="m-0">{t.karmicHoroscope}</p>
							</div>
							<div className="self-stretch relative font-ibm-plex-sans text-dimgray-100 mq450:text-base">
								5 000₽ | 55$
							</div>
						</div>
						<button className="cursor-pointer [border:none] p-[15px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-tan">
							<div className="relative text-mini font-ibm-plex-sans text-black text-left inline-block min-w-[128px]">
								{t.learnMore}
							</div>
						</button>
					</div>
					<AstrologicalForecast
						image="/image-3@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Гороскоп совместимости" : lang === "en" ? "Compatibility Horoscope" : "兼容性星盘"}
						prop1="8 000₽ | 90$"
						lang={lang}
						onClick={() => openModal("compatibility")}
					/>
					<ExpressConsultation1
						image="/image-4@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Детская " : lang === "en" ? "Child " : "儿童"}
						prop1={lang === "ru" ? "астрология" : lang === "en" ? "astrology" : "占星术"}
						prop2="5 000₽ | 55$"
						lang={lang}
						onClick={() => openModal("childrenAstrology")}
					/>
					<ExpressConsultation1
						image="/image-5@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Профориентация." : lang === "en" ? "Career guidance." : "职业指导。"}
						prop1={lang === "ru" ? "Выбор профессии" : lang === "en" ? "Career choice" : "职业选择"}
						prop2="5 000₽ | 55$"
						lang={lang}
						onClick={() => openModal("careerGuidance")}
					/>
					<AstrologicalForecast
						image="/image-6@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={
							lang === "ru"
								? "Гороскоп переезда и иммиграции"
								: lang === "en"
									? "Relocation and Immigration Horoscope"
									: "搬迁和移民星盘"
						}
						prop1="8 000₽ | 90$"
						lang={lang}
						onClick={() => openModal("relocation")}
					/>
					<ExpressConsultation1
						image="/image-7@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Подбор " : lang === "en" ? "Selection of " : "选择"}
						prop1={lang === "ru" ? "важной даты" : lang === "en" ? "important date" : "重要日期"}
						prop2="5 000₽ | 55$"
						lang={lang}
						onClick={() => openModal("dateSelection")}
					/>
					<AstrologicalForecast
						image="/image-8@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Медицинская астрология" : lang === "en" ? "Medical Astrology" : "医学占星术"}
						prop1="10 000₽ | 110$"
						lang={lang}
						onClick={() => openModal("medicalAstrology")}
					/>
					<AstrologicalForecast
						image="/image-9@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={
							lang === "ru"
								? "Геммоастрология. Волшебная сила камней"
								: lang === "en"
									? "Gemstone Astrology. Magical power of stones"
									: "宝石占星术。石头的魔力"
						}
						prop1="10 000₽ | 110$"
						lang={lang}
						onClick={() => openModal("gemstoneAstrology")}
					/>
					<ExpressConsultation1
						image="/image-10@2x.png"
						propAlignSelf="stretch"
						propOverflow="hidden"
						propWidth="unset"
						prop={lang === "ru" ? "Ректификация." : lang === "en" ? "Rectification." : "校正。"}
						prop1={lang === "ru" ? "Точное время рождения" : lang === "en" ? "Exact birth time" : "精确出生时间"}
						prop2="от 3 000₽ | 35$"
						lang={lang}
						onClick={() => openModal("rectification")}
					/>
					<ExpressConsultation1
						image="/image-11@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="282px"
						prop={lang === "ru" ? "Натальная " : lang === "en" ? "Natal " : "本命"}
						prop1={lang === "ru" ? "карта" : lang === "en" ? "chart" : "星盘"}
						prop2="от 8 000₽ | 90$"
						lang={lang}
						onClick={() => openModal("natalChart")}
					/>
					<AstrologicalForecast
						image="/image-12@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="269px"
						prop={lang === "ru" ? "Коррекционная астрология" : lang === "en" ? "Corrective Astrology" : "矫正占星术"}
						prop1="от 8 000₽ | 90$"
						lang={lang}
						onClick={() => openModal("correctiveAstrology")}
					/>
					<ExpressConsultation1
						image="/image-13@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="269px"
						prop={lang === "ru" ? "Годовое" : lang === "en" ? "Annual" : "年度"}
						prop1={lang === "ru" ? "сопровождение" : lang === "en" ? "support" : "支持"}
						prop2="от 40 000₽ | 440$"
						lang={lang}
						onClick={() => openModal("annualSupport")}
					/>
					<AstrologicalForecast
						image="/image-14@2x.png"
						propAlignSelf="unset"
						propOverflow="unset"
						propWidth="269px"
						prop={
							lang === "ru"
								? "Астрологический календарь / ежедневник"
								: lang === "en"
									? "Astrological calendar / planner"
									: "占星日历 / 规划器"
						}
						prop1="от 1 250₽ | 15$"
						lang={lang}
						onClick={() => openModal("calendars")}
					/>
				</div>
			</section>

			{/* Рендеринг модальных окон */}
			{activeModal && (
				<Modal isOpen={true} onClose={closeModal} width="1000px">
					{(() => {
						switch (activeModal) {
							case "karma":
								return <KarmaModal onClose={closeModal} lang={lang} />
							case "businessConsultation":
								return <BusinessConsultationModal onClose={closeModal} lang={lang} />
							case "childrenAstrology":
								return <ChildrenAstrologyModal onClose={closeModal} lang={lang} />
							case "expressConsultation":
								return <ExpressConsultationModal onClose={closeModal} lang={lang} />
							case "calendars":
								return <CalendarsModal onClose={closeModal} lang={lang} />
							case "astrologicalConsultation":
								return <AstrologicalConsultationModal onClose={closeModal} lang={lang} />
							default:
								return (
									<GenericModal
										title={t[activeModal]?.title || ""}
										price={getModalPrice(activeModal)}
										description={t[activeModal]?.description || []}
										image={getModalImage(activeModal)}
									/>
								)
						}
					})()}
				</Modal>
			)}
		</>
	)
}

export default ServicesSection

