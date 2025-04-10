"use client"

import type { NextPage } from "next"

const translations = {
	en: {
		title: "Karmic Horoscope - Time for Self-Realization",
		description1: [
			"✓ Description of past karmic experience, your knowledge baggage;",
			"✓ Talents from ancestors;",
			"✓ Certain abilities you were born with and brought from previous incarnations.",
		],
		description2: [
			"Karma is the path that needs to be walked in this incarnation.",
			"If you're not on the right path, you receive warnings from the Universe at certain periods of life, and then losses come.",
			"To work out the karmic task in this incarnation, a person must necessarily develop in the right direction.",
		],
		price: "Price:",
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
		title: "Кармический гороскоп – время самореализации",
		description1: [
			"✓ Описание прошлого кармического опыта, багаж ваших знаний;",
			"✓ Таланты от предков;",
			"✓ Определенные способности, с которыми вы родились и принесли из предыдущих воплощений.",
		],
		description2: [
			"Карма – это путь который необходимо пройти в этом воплощении.",
			"Если вы не на верном пути, то в определенные периоды жизни вы от Вселенной получаете предупреждение, а потом приходят потери.",
			"Для отработки кармической задачи в этом воплощении, человеку обязательно следует развиваться в правильном направлении.",
		],
		price: "Стоимость:",
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
		title: "业力星盘 - 自我实现的时刻",
		description1: [
			"✓ 描述过去的业力经验，你的知识积累；",
			"✓ 来自祖先的天赋；",
			"✓ 你与生俱来并从前世带来的某些能力。",
		],
		description2: [
			"业力是需要在这一世走过的路。",
			"如果你不在正确的道路上，在生命的某些时期，你会从宇宙那里得到警告，然后损失就会到来。",
			"为了完成这一世的业力任务，一个人必须在正确的方向上发展。",
		],
		price: "价格：",
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

export type KarmaModalProps = {
	onClose?: () => void
	lang?: Language
}

const KarmaModal: NextPage<KarmaModalProps> = ({ onClose, lang = "ru" }) => {
	const t = translations[lang]

	return (
		<div className="flex flex-col">
			<div className="w-full flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
				<div className="relative font-semibold inline-block max-w-full mq450:text-base">{t.title}</div>
				<div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq975:flex-wrap">
					<div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[376px] max-w-full mq700:min-w-full">
						<div className="self-stretch relative text-dimgray-300">
							{t.description1.map((item, index) => (
								<p key={index} className="[margin-block-start:0] [margin-block-end:4px]">
									{item}
								</p>
							))}
						</div>
						<div className="self-stretch relative text-dimgray-300">
							{t.description2.map((item, index) => (
								<p key={index} className="[margin-block-start:0] [margin-block-end:4px]">
									{item}
								</p>
							))}
						</div>
						<div className="relative">
							<span className="font-medium">{`${t.price} `}</span>
							<span>5 000₽</span>
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
						<div className="self-stretch h-[117px] relative inline-block">
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
					<div className="h-[302px] w-[342px] rounded-xl flex flex-row items-center justify-center py-[125px] px-5 box-border bg-[url('/imagetext1@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[342px] max-w-full text-center text-mini text-darksalmon mq700:min-w-full mq975:flex-1">
						<div className="relative font-semibold inline-block min-w-[53px]">KARMA</div>
					</div>
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

export default KarmaModal

