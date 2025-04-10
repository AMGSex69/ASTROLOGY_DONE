"use client"

import type { NextPage } from "next"
import Products1 from "../products1"
import Products from "../products"
import Products2 from "../products2"

const translations = {
	en: {
		buyOn: "BUY ON",
	},
	ru: {
		buyOn: "КУПИТЬ НА",
	},
	zh: {
		buyOn: "在上购买",
	},
}

type Language = keyof typeof translations

export type CalendarsModalProps = {
	onClose?: () => void
	lang?: Language
}

const CalendarsModal: NextPage<CalendarsModalProps> = ({ onClose, lang = "ru" }) => {
	const t = translations[lang]

	return (
		<div className="flex flex-row items-start justify-start flex-wrap content-start gap-x-[26px] gap-y-6">
			<Products1 lang={lang} />
			<Products lang={lang} />
			<Products2 lang={lang} />
		</div>
	)
}

export default CalendarsModal
