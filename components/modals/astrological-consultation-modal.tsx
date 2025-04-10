"use client"

import type { NextPage } from "next"

const translations = {
	en: {
		title: "Astrological Consultation",
		price: "Price:",
		oneHour: "1 hour – 3,000₽",
		twoHours: "2 hours – 6,000₽",
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
		title: "Астрологическая консультация",
		price: "Стоимость:",
		oneHour: "1 час – 3 000₽",
		twoHours: "2 часа – 6 000₽",
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
		title: "占星咨询",
		price: "价格：",
		oneHour: "1小时 – 3,000₽",
		twoHours: "2小时 – 6,000₽",
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

export type AstrologicalConsultationModalProps = {
	onClose?: () => void
	lang?: Language
}

const AstrologicalConsultationModal: NextPage<AstrologicalConsultationModalProps> = ({ onClose, lang = "ru" }) => {
	const t = translations[lang]

	return (
		<div className="flex flex-col">
			<div className="w-full flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
				<div className="relative font-semibold mq450:text-base">{t.title}</div>
				<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 box-border gap-x-6 gap-y-[22px] max-w-full text-base font-ibm-plex-sans">
					<div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[335px] max-w-full">
						<div className="relative">
							<p className="[margin-block-start:0] [margin-block-end:4px] font-medium">{t.price}</p>
							<p className="[margin-block-start:0] [margin-block-end:4px]">{t.oneHour}</p>
							<p className="m-0">{t.twoHours}</p>
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
						className="w-[342px] relative rounded-xl max-h-full object-cover max-w-full"
						alt=""
						src="/separator@2x.png"
					/>
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
}

export default AstrologicalConsultationModal

