import type { NextPage } from "next"

export type HildrenAstrologyType = {
  className?: string
  onClose?: () => void
}

const HildrenAstrology: NextPage<HildrenAstrologyType> = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[1151px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq700:pl-[43px] mq700:pr-[43px] mq700:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <section className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-10 pl-0 pr-[35px] box-border gap-[26px] min-h-[650px] max-w-full shrink-0 text-left text-mini text-black font-ibm-plex-sans mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
        <div className="w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-xl font-playfair-display">
          <div className="relative font-semibold mq450:text-base">Детская астрология</div>
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base font-ibm-plex-sans mq975:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[376px] max-w-full mq700:min-w-full">
              <div className="self-stretch relative text-dimgray-300">
                Каждый родитель мечтает, чтобы его ребенок вырос успешным, активным, богатым.
              </div>
              <div className="self-stretch relative text-dimgray-300">
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span> Мотивация к учебе;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span> Выбор необходимых кружков/секций;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span>{` В какой спорт отдать, направления развития ребенка; `}</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">✓</span>
                  <span> Выбор профессии;</span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:13px]">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Ключ к поведению (как найти к нему подход);</span>
                </p>
                <p className="m-0">
                  <span className="font-medium font-ibm-plex-sans">{`✓ `}</span>
                  <span>Врожденные таланты и способности.</span>
                </p>
              </div>
              <div className="relative">
                <span className="font-medium">{`Стоимость: `}</span>
                <span>5 000₽</span>
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
              className="w-[342px] relative rounded-xl max-h-full object-cover max-w-full mq975:flex-1"
              loading="lazy"
              alt=""
              src="/rectangle-55@2x.png"
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

export default HildrenAstrology
