"use client"

import { useCallback } from "react"
import { useModal } from "@/components/modal-manager"

export function useModals() {
  const { openModal, closeModal } = useModal()

  const openKarmaModal = useCallback(
    (lang: "ru" | "en" | "zh" = "ru") => {
      openModal("karma", { lang })
    },
    [openModal],
  )

  const openBusinessConsultationModal = useCallback(
    (lang: "ru" | "en" | "zh" = "ru") => {
      openModal("businessConsultation", { lang })
    },
    [openModal],
  )

  const openChildrenAstrologyModal = useCallback(
    (lang: "ru" | "en" | "zh" = "ru") => {
      openModal("childrenAstrology", { lang })
    },
    [openModal],
  )

  const openExpressConsultationModal = useCallback(
    (lang: "ru" | "en" | "zh" = "ru") => {
      openModal("expressConsultation", { lang })
    },
    [openModal],
  )

  const openCalendarsModal = useCallback(
    (lang: "ru" | "en" | "zh" = "ru") => {
      openModal("calendars", { lang })
    },
    [openModal],
  )

  const openAstrologicalConsultationModal = useCallback(
    (lang: "ru" | "en" | "zh" = "ru") => {
      openModal("astrologicalConsultation", { lang })
    },
    [openModal],
  )

  return {
    openKarmaModal,
    openBusinessConsultationModal,
    openChildrenAstrologyModal,
    openExpressConsultationModal,
    openCalendarsModal,
    openAstrologicalConsultationModal,
    closeModal,
  }
}
