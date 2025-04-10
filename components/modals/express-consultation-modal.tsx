"use client"

import type { NextPage } from "next"

const translations = {
	en: {
		expressConsultation: "Express consultation",
		duration: "Duration:",
		minutes: "30 minutes",
		price: "Price:",
		priceValue: "3,000₽ | 35$",
		description:
			"During the consultation, we will discuss one specific question of your choice. You will receive clear recommendations on how to act in your situation.",
		order: "ORDER",
		giftCertificate: "GIFT CERTIFICATE",
	},
	ru: {
		expressConsultation: "Экспресс-консультация",
		duration: "Длительность:",
		minutes: "30 минут",
		price: "Стоимость:",
		priceValue: "3 000₽ | 35$",
		description:
			"На консультации мы разберем один конкретный вопрос на ваш выбор. Вы получите четкие рекомендации, как действовать в вашей ситуации.",
		order: "ЗАКАЗАТЬ",
		giftCertificate: "Подарить сертификат",
	},
	zh: {
		expressConsultation: "快速咨询",
		duration: "时长：",
		minutes: "30分钟",
		price: "价格：",
		priceValue: "3,000₽ | 35$",
		description: "在咨询期间，我们将讨论您选择的一个具体问题。您将收到关于如何在您的情况下行动的明确建议。",
		order: "订购",
		giftCertificate: "赠送礼券",
	},
}

type Language = keyof typeof translations

export type ExpressConsultationModalProps = {
	onClose?: () => void
	lang?: Language
}

const ExpressConsultationModal: NextPage<ExpressConsultationModalProps> = ({ onClose, lang = "ru" }) => {
	const t = translations[lang]

	return (
		<div className="flex flex-col">
			<div className="flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[280px] max-w-full text-23xl text-dimgray-100 font-playfair-display">
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
						<div className="flex-1 relative">{t.priceValue}</div>
					</div>
				</div>
				<div className="self-stretch relative text-base text-dimgray-300">{t.description}</div>
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
}

export default ExpressConsultationModal

