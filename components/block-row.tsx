"use client"

import type { NextPage } from "next"
import { useMemo, type CSSProperties } from "react"

const translations = {
  en: {
    buy: "BUY",
  },
  ru: {
    buy: "КУПИТЬ",
  },
  zh: {
    buy: "购买",
  },
}

type Language = keyof typeof translations

export type BlockRowType = {
  className?: string
  title?: string
  description?: string | string[]
  buttonText?: string
  buttonStyle?: CSSProperties
  imageSrc?: string
  imageAlt?: string
  imageStyle?: CSSProperties
  rowStyle?: CSSProperties
  contentStyle?: CSSProperties
  titleStyle?: CSSProperties
  descriptionStyle?: CSSProperties
  lang?: Language
}

const BlockRow: NextPage<BlockRowType> = ({
  className = "",
  title,
  description,
  buttonText,
  buttonStyle,
  imageSrc = "/image-15@2x.png",
  imageAlt = "",
  imageStyle,
  rowStyle,
  contentStyle,
  titleStyle,
  descriptionStyle,
  lang = "ru",
}) => {
  const t = translations[lang]

  const rowFinalStyle: CSSProperties = useMemo(() => {
    return {
      ...rowStyle,
    }
  }, [rowStyle])

  const contentFinalStyle: CSSProperties = useMemo(() => {
    return {
      ...contentStyle,
    }
  }, [contentStyle])

  const titleFinalStyle: CSSProperties = useMemo(() => {
    return {
      ...titleStyle,
    }
  }, [titleStyle])

  const descriptionFinalStyle: CSSProperties = useMemo(() => {
    return {
      ...descriptionStyle,
    }
  }, [descriptionStyle])

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return description.map((desc, index) => (
        <p className="m-0" key={index} style={descriptionFinalStyle}>
          {desc}
        </p>
      ))
    }
    return (
      <p className="m-0" style={descriptionFinalStyle}>
        {description}
      </p>
    )
  }

  const handleButtonClick = () => {
    window.location.href = "https://wa.me/+79994455494"
  }

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center gap-6 max-w-full text-left text-base text-black font-ibm-plex-sans mq750:flex-wrap ${className}`}
      style={rowFinalStyle}
    >
      <img
        className="h-[30px] w-[71px] relative object-cover"
        loading="lazy"
        alt={imageAlt}
        src={imageSrc || "/placeholder.svg"}
        style={imageStyle}
      />
      <div
        className="flex-1 rounded-6xl border-gray border-[1px] border-solid box-border flex flex-row items-center justify-between py-[11px] px-[25px] min-w-[419px] max-w-full gap-0 mq750:flex-wrap mq750:min-w-full"
        style={contentFinalStyle}
      >
        <div className="relative inline-block max-w-full">
          <p className="[margin-block-start:0] [margin-block-end:4px]" style={titleFinalStyle}>
            <span className="font-medium font-ibm-plex-sans">
              <span className="uppercase">{title}</span>
            </span>
          </p>
          {renderDescription()}
        </div>
        <button
          className="cursor-pointer [border:none] py-[15px] px-[45px] bg-beige-100 rounded-31xl flex flex-row items-center justify-center hover:bg-tan"
          style={buttonStyle}
          onClick={handleButtonClick}
        >
          <div className="relative text-mini font-medium font-ibm-plex-sans text-black text-left inline-block min-w-[59px]">
            {buttonText || t.buy}
          </div>
        </button>
      </div>
    </div>
  )
}

export default BlockRow
