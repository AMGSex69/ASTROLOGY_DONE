"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
  contentClassName?: string
  showCloseButton?: boolean
  width?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  className,
  contentClassName,
  showCloseButton = true,
  width = "auto",
  maxWidth = "90vw",
  maxHeight = "90vh",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Закрытие по клику вне модального окна
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Закрытие по нажатию Escape
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.addEventListener("keydown", handleEscKey)
      // Блокировка прокрутки страницы
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Блокировка прокрутки страницы при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        ref={modalRef}
        className={cn("relative rounded-31xl bg-oldlace overflow-auto", className)}
        style={{
          width,
          maxWidth,
          maxHeight,
        }}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-beige-100 p-2 hover:bg-tan transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {title && (
          <div className="px-6 pt-4 pb-2">
            <h2 className="text-xl font-semibold font-playfair-display">{title}</h2>
          </div>
        )}

        <div className={cn("p-6", contentClassName)}>{children}</div>
      </div>
    </div>
  )
}
