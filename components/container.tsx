import type { NextPage } from "next"

export type ContainerType = {
  className?: string
}

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[944px] flex flex-col items-start justify-start gap-[26px] max-w-full text-left text-xl text-black font-playfair-display ${className}`}
    >
      <div className="relative font-semibold mq450:text-base">Астрологическая консультация</div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 box-border gap-x-6 gap-y-[22px] max-w-full text-base font-ibm-plex-sans">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[335px] max-w-full">
          <div className="relative">
            <p className="[margin-block-start:0] [margin-block-end:4px] font-medium">Стоимость:</p>
            <p className="[margin-block-start:0] [margin-block-end:4px]">1 час – 3 000₽</p>
            <p className="m-0">2 часа – 6 000₽</p>
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
          alt=""
          src="/separator@2x.png"
        />
      </div>
    </div>
  )
}

export default Container
