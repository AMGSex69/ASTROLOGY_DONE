"use client"

import type { NextPage } from "next"

const translations = {
	en: {
		title: "Astrological diary",
		description: "Astrological diary made of genuine leather, handmade, A5 format, premium dated design inside.",
		features: [
			"Sunrise/sunset;",
			"Moon aspects;",
			"Ekadashi;",
			"Beginning of fast/end of fast;",
			"Moon void of course;",
			"Retro planets;",
			"Lunar days;",
			"Ingresses;",
			"Eclipses;",
			"Notes;",
			"New moons and full moons;",
			"Moon phases.",
		],
		buyOn: "BUY ON",
	},
	ru: {
		title: "Астрологический ежедневник",
		description:
			"Астрологический ежедневник из натуральной кожи, ручная работа, формат А5, премиальный датированный дизайн внутри.",
		features: [
			"Восход/заход солнца;",
			"Аспекты луны;",
			"Экадаши;",
			"Начало поста/выход из поста;",
			"Луна без курса;",
			"Ретро планеты;",
			"Лунные дни;",
			"Ингрессии;",
			"Затмения;",
			"Заметки;",
			"Новолуния и полнолуния;",
			"Фазы луны.",
		],
		buyOn: "КУПИТЬ НА",
	},
	zh: {
		title: "占星日记",
		description: "由真皮制成的占星日记，手工制作，A5格式，内部优质日期设计。",
		features: [
			"日出/日落；",
			"月亮相位；",
			"十一斋日；",
			"斋戒开始/结束；",
			"月亮空亡；",
			"逆行行星；",
			"月亮日；",
			"入宫；",
			"日食月食；",
			"笔记；",
			"新月和满月；",
			"月相。",
		],
		buyOn: "在上购买",
	},
}

type Language = keyof typeof translations

export type ProductsType = {
	className?: string
	lang?: Language
}

const Products: NextPage<ProductsType> = ({ className = "", lang = "ru" }) => {
	const t = translations[lang]

	const handleBuyClick = () => {
		window.open("https://www.wildberries.ru/", "_blank")
	}

	return (
		<div
			className={`flex-1 flex flex-col items-center justify-start gap-[15.3px] min-w-[293px] text-left text-base text-black font-ibm-plex-sans ${className}`}
		>
			<a className="[text-decoration:none] w-44 relative text-xl font-semibold font-playfair-display text-[inherit] text-center inline-block mq450:text-base">
				<p className="m-0">{t.title}</p>
			</a>
			<img
				className="self-stretch h-[271px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
				loading="lazy"
				alt=""
				src="/rectangle-56-1@2x.png"
			/>
			<div className="self-stretch relative text-dimgray-300 whitespace-pre-wrap">{t.description}</div>
			<div className="self-stretch h-[296px] relative text-dimgray-300 inline-block">
				{t.features.map((feature, index) => (
					<p key={index} className="[margin-block-start:0] [margin-block-end:4px]">
						<span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
						<span>{feature}</span>
					</p>
				))}
			</div>
			<div className="self-stretch flex flex-col items-center justify-end pt-[17px] px-0 pb-0 text-mini">
				<button
					onClick={handleBuyClick}
					className="self-stretch rounded-31xl bg-beige-100 overflow-hidden flex flex-row items-center justify-center py-[15px] px-5 gap-3 whitespace-nowrap hover:bg-tan cursor-pointer"
				>
					<div className="h-5 w-[83px] relative uppercase font-medium inline-block">{t.buyOn}</div>
					<img className="h-6 w-6 relative rounded object-cover" alt="Wildberries" src="/image-16@2x.png" />
				</button>
			</div>
		</div>
	)
}

export default Products
