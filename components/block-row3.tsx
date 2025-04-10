"use client"

import type { NextPage } from "next"
import { useMemo, type CSSProperties } from "react"

export type BlockRow3Type = {
  className?: string
  prop?: string
  vIII?: string
  prop1?: string

  /** Style props */
  vIIIFontFamily?: CSSProperties["fontFamily"]
}

const BlockRow3: NextPage<BlockRow3Type> = ({ className = "", prop, vIII, prop1, vIIIFontFamily }) => {
  const vIIIStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: vIIIFontFamily,
    }
  }, [vIIIFontFamily])

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center gap-6 max-w-full text-left text-base text-black font-ibm-plex-sans mq750:flex-wrap ${className}`}
    >
      <img className="h-[30px] w-[71px] relative object-cover" alt="" src="/image-15@2x.png" />
      <div className="flex-1 rounded-6xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-between py-[11px] px-[25px] min-w-[419px] [row-gap:20px] max-w-full gap-0 mq750:flex-wrap mq750:min-w-full">
        <div className="h-[21px] w-[443px] relative inline-block shrink-0 max-w-full">
          <span className="font-medium">
            <span className="uppercase">{prop}</span>
          </span>
          <span className="font-medium" style={vIIIStyle}>
            {vIII}
          </span>
          <span className="font-ibm-plex-sans">{prop1}</span>
        </div>
        <div className="h-[50px] w-[149px] rounded-31xl bg-beige-100 flex flex-row items-center justify-center py-[15px] px-[45px] box-border text-mini">
          <div className="self-stretch flex-1 relative font-medium">КУПИТЬ</div>
        </div>
      </div>
    </div>
  )
}

export default BlockRow3
