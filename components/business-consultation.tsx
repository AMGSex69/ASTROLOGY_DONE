import type { NextPage } from "next"

export type BusinessConsultationType = {
  className?: string
  onClose?: () => void
}

const BusinessConsultation: NextPage<BusinessConsultationType> = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[1116px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-row items-start justify-center py-0 px-5 box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto ${className}`}
    >
      <section className="w-[944px] flex flex-row items-end justify-start flex-wrap content-end py-10 px-0 box-border gap-[26px] min-h-[641px] max-w-[calc(100%_-_0px)] shrink-0 text-left text-mini text-black font-ibm-plex-sans mq565:pt-[26px] mq565:pb-[26px] mq565:box-border">
        <div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
          <div className="relative font-semibold mq450:text-base">Бизнес-консультация. Деньги</div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 box-border gap-x-6 gap-y-[22px] max-w-full text-base font-ibm-plex-sans">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[335px] max-w-full">
              <div className="self-stretch relative text-dimgray-300">
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Способы реализации себя (бизнес/найм/фриланс);</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Подходящие сферы для заработка;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Профессии к которым у вас наибольший потенциал;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>
                    Натальная карта вашего бизнеса (подбор персонала, хорошие даты для заключения сделок, вкладов,
                    проектов и т.д.);
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Все риски;</span>
                </p>
                <p className="m-0">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Приход/потеря денег в прогностике.</span>
                </p>
              </div>
              <div className="self-stretch relative">
                <p className="[margin-block-start:0] [margin-block-end:4px] font-medium">Стоимость:</p>
                <p className="m-0">1 час – 5 000₽</p>
              </div>
              <div className="self-stretch relative">
                <span>
                  <span className="font-medium">Формат:</span>
                </span>
                <span className="text-dimgray-300">
                  <span>{` `}</span>
                  <span>
                    консультации проходят в видеоформате, при живом общении (Skype, Telegram, WhatsApp, Zoom и т.д. +
                    astrobook (печатный конспект основных моментов) + видеоконсультации).
                  </span>
                </span>
              </div>
              <div className="self-stretch h-[117px] relative inline-block">
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span className="font-medium">
                    <span>{`Для консультации необходимы данные: `}</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px] text-dimgray-300">
                  <span>
                    <span className="font-medium">✓</span>
                    <span className="font-ibm-plex-sans"> Год, месяц и дата рождения;</span>
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:4px]">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span> Город;</span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="font-medium font-ibm-plex-sans">✓</span>
                    <span>
                      {" "}
                      Время рождения по бирке или со слов мамы (если нет точного времени рождения, делаем ректификацию).
                    </span>
                  </span>
                </p>
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
        <div className="h-[50px] w-[159px] rounded-31xl bg-beige-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[42px] box-border">
          <div className="self-stretch flex-1 relative font-medium">ЗАКАЗАТЬ</div>
        </div>
        <div className="h-[50px] w-[215px] rounded-31xl [background:conic-gradient(from_212.53deg_at_50%_50%,_#f2d399_-134.63deg,_#f2deb6_32.93deg,_#fbe6be_156.79deg,_#f2d399_225.37deg,_#f2deb6_392.93deg)] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-4 box-border whitespace-nowrap">
          <div className="self-stretch flex-1 relative uppercase font-medium">Подарить сертификат</div>
        </div>
      </section>
    </div>
  )
}

export default BusinessConsultation
