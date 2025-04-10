"use client"

import type { NextPage } from "next"

const translations = {
	en: {
		title: "Astrological calendars planners",
		description:
			"Wall lunar calendar planner, flip-over with 12 sheets, for wall, A3 format, dense paper 170g/m2, large calendar grid, fields for notes, favorable and unfavorable lunar days.",
		features: [
			"Moon aspects;",
			"Moon void of course;",
			"Retro planets;",
			"Lunar days;",
			"Ingresses;",
			"Eclipses;",
			"Ekadashi;",
			"Notes;",
			"New moons;",
			"Full moons;",
			"Moon phases.",
		],
		buyOn: "BUY ON",
	},
	ru: {
		title: "Астрологические календари планеры",
		description:
			"Настенный лунный календарь планер, перекидной на 12 листов, на стену, формат А3, плотная бумага 170г/м2, крупная календарная сетка, поля для записей, благоприятные и неблагоприятные лунные дни.",
		features: [
			"Аспекты луны;",
			"Луна без курса;",
			"Ретро планеты;",
			"Лунные дни;",
			"Ингрессии;",
			"Затмения;",
			"Экадаши;",
			"Заметки;",
			"Новолуния;",
			"Полнолуния;",
			"Фазы луны.",
		],
		buyOn: "КУПИТЬ НА",
	},
	zh: {
		title: "占星日历规划器",
		description:
			"墙壁月亮日历规划器，12页翻页式，挂墙用，A3格式，170克/平方米厚纸，大日历网格，记录区域，有利和不利的月亮日。",
		features: [
			"月亮相位；",
			"月亮空亡；",
			"逆行行星；",
			"月亮日；",
			"入宫；",
			"日食月食；",
			"十一斋日；",
			"笔记；",
			"新月；",
			"满月；",
			"月相。",
		],
		buyOn: "在上购买",
	},
}

type Language = keyof typeof translations

export type Products1Type = {
	className?: string
	lang?: Language
}

const Products1: NextPage<Products1Type> = ({ className = "", lang = "ru" }) => {
	const t = translations[lang]

	const handleBuyClick = () => {
		window.open("https://www.wildberries.ru/", "_blank")
	}

	return (
		<div
			className={`h-[837px] flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[15px] min-w-[293px] text-left text-base text-black font-ibm-plex-sans ${className}`}
		>
			<div className="relative text-xl font-semibold font-playfair-display text-center mq450:text-base">
				<p className="m-0">{t.title}</p>
			</div>
			<img
				className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
				loading="lazy"
				alt=""
				src="/rectangle-56@2x.png"
			/>
			<div className="self-stretch relative text-dimgray-300">{t.description}</div>
			<div className="self-stretch h-[271px] relative text-dimgray-300 inline-block">
				{t.features.map((feature, index) => (
					<p key={index} className="[margin-block-start:0] [margin-block-end:4px]">
						<span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
						<span>{feature}</span>
					</p>
				))}
			</div>
			<button
				onClick={handleBuyClick}
				className="self-stretch rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center py-[15px] px-5 gap-3 whitespace-nowrap text-mini hover:bg-tan cursor-pointer"
			>
				<div className="h-5 w-[83px] relative uppercase font-medium inline-block">{t.buyOn}</div>
				<img className="h-6 w-6 relative rounded object-cover" alt="Wildberries" src="/image-16@2x.png" />
			</button>
		</div>
	)
}

export default Products1
