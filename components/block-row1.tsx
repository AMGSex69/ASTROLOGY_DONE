"use client"

import type { NextPage } from "next"
import { useMemo, type CSSProperties } from "react"

export type BlockRow1Type = {
  className?: string
  prop?: string
  iII?: string
  prop1?: string

  /** Style props */
  propHeight?: CSSProperties["height"]
  propHeight1?: CSSProperties["height"]
  propWidth?: CSSProperties["width"]
  propDisplay?: CSSProperties["display"]
  propMinWidth?: CSSProperties["minWidth"]
  propAlignSelf?: CSSProperties["alignSelf"]
  propFlex?: CSSProperties["flex"]
  iIIFontFamily?: CSSProperties["fontFamily"]
}

const BlockRow1: NextPage<BlockRow1Type> = ({
  className = "",
  propHeight,
  prop,
  iII,
  prop1,
  propHeight1,
  propWidth,
  propDisplay,
  propMinWidth,
  propAlignSelf,
  propFlex,
  iIIFontFamily,
}) => {
  const iIIContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    }
  }, [propHeight])

  const buttonBuyStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    }
  }, [propHeight1, propWidth])

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
    }
  }, [propDisplay, propMinWidth, propAlignSelf, propFlex])

  const iIIStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: iIIFontFamily,
    }
  }, [iIIFontFamily])

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center gap-6 max-w-full text-left text-base text-black font-ibm-plex-sans mq750:flex-wrap ${className}`}
    >
      <img className="h-[30px] w-[71px] relative object-cover" loading="lazy" alt="" src="/image-15@2x.png" />
      <div className="flex-1 rounded-6xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-between py-[11px] px-[25px] min-w-[419px] [row-gap:20px] max-w-full gap-0 mq750:flex-wrap mq750:min-w-full">
        <div className="w-[443px] relative inline-block max-w-full" style={iIIContainerStyle}>
          <span className="font-medium">
            <span className="uppercase">{prop}</span>
          </span>
          <span className="font-medium" style={iIIStyle}>
            {iII}
          </span>
          <span className="font-ibm-plex-sans">{prop1}</span>
        </div>
        <button
          className="cursor-pointer [border:none] py-[15px] px-[45px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center hover:bg-tan"
          style={buttonBuyStyle}
        >
          <div
            className="relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[59px]"
            style={divStyle}
          >
            КУПИТЬ
          </div>
        </button>
      </div>
    </div>
  )
}

export default BlockRow1
