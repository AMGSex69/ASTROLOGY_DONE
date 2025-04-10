"use client"

import type { NextPage } from "next"

const translations = {
	en: {
		title: "Business Consultation. Money",
		description: [
			"✓ Ways to realize yourself (business/employment/freelance);",
			"✓ Suitable areas for earning;",
			"✓ Professions for which you have the greatest potential;",
			"✓ Natal chart of your business (personnel selection, good dates for deals, investments, projects, etc.);",
			"✓ All risks;",
			"✓ Income/loss of money in prognostics.",
		],
		price: "Price:",
		priceValue: "1 hour – 5,000₽",
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
		title: "Бизнес-консультация. Деньги",
		description: [
			"✓ Способы реализации себя (бизнес/найм/фриланс);",
			"✓ Подходящие сферы для заработка;",
			"✓ Профессии к которым у вас наибольший потенциал;",
			"✓ Натальная карта вашего бизнеса (подбор персонала, хорошие даты для заключения сделок, вкладов, проектов и т.д.);",
			"✓ Все риски;",
			"✓ Приход/потеря денег в прогностике.",
		],
		price: "Стоимость:",
		priceValue: "1 час – 5 000₽",
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
		title: "商业咨询。金钱",
		description: [
			"✓ 自我实现的方式（商业/就业/自由职业）；",
			"✓ 适合赚钱的领域；",
			"✓ 您最有潜力的职业；",
			"✓ 您业务的本命盘（人员选择、交易、投资、项目等的良好日期）；",
			"✓ 所有风险；",
			"✓ 预测中的收入/损失。",
		],
		price: "价格：",
		priceValue: "1小时 – 5,000₽",
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

export type BusinessConsultationModalProps = {
	onClose?: () => void
	lang?: Language
}

const BusinessConsultationModal: NextPage<BusinessConsultationModalProps> = ({ onClose, lang = "ru" }) => {
	const t = translations[lang]

	return (
		<div className="flex flex-col">
			<div className="w-full flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
				<div className="relative font-semibold mq450:text-base">{t.title}</div>
				<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-6 gap-y-[22px] max-w-full text-base font-ibm-plex-sans">
					<div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[335px] max-w-full">
						<div className="self-stretch relative text-dimgray-300">
							{t.description.map((item, index) => (
								<p key={index} className="[margin-block-start:0] [margin-block-end:13px]">
									{item}
								</p>
							))}
						</div>
						<div className="self-stretch relative">
							<p className="[margin-block-start:0] [margin-block-end:4px] font-medium">{t.price}</p>
							<p className="m-0">{t.priceValue}</p>
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
						loading="lazy"
						alt=""
						src="/rectangle-551@2x.png"
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

export default BusinessConsultationModal
