import type { NextPage } from "next"
import Products1 from "./products1"
import Products from "./products"
import Products2 from "./products2"

export type CalendarsType = {
  className?: string
  onClose?: () => void
}

const Calendars: NextPage<CalendarsType> = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[1151px] h-[571px] relative rounded-31xl bg-oldlace overflow-y-auto flex flex-col items-start justify-start py-0 px-[86px] box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq450:pl-5 mq450:pr-5 mq450:box-border mq650:pl-[43px] mq650:pr-[43px] mq650:box-border ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-10 pb-[37px] pl-0 pr-[7px] gap-x-[26px] gap-y-6 shrink-0 mq725:pt-[26px] mq725:pb-6 mq725:box-border">
        <Products1 />
        <Products />
        <Products2 />
      </section>
    </div>
  )
}

export default Calendars
