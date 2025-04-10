"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import { Modal } from "./ui/modal"

// Типы модальных окон
export type ModalType =
  | "karma"
  | "businessConsultation"
  | "childrenAstrology"
  | "expressConsultation"
  | "calendars"
  | "astrologicalConsultation"
  | null

// Контекст для управления модальными окнами
interface ModalContextType {
  openModal: (type: ModalType, props?: any) => void
  closeModal: () => void
  currentModal: ModalType
  modalProps: any
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  currentModal: null,
  modalProps: {},
})

// Хук для использования контекста модальных окон
export const useModal = () => useContext(ModalContext)

// Провайдер модальных окон
export function ModalProvider({ children }: { children: ReactNode }) {
  const [currentModal, setCurrentModal] = useState<ModalType>(null)
  const [modalProps, setModalProps] = useState({})

  const openModal = (type: ModalType, props = {}) => {
    setCurrentModal(type)
    setModalProps(props)
  }

  const closeModal = () => {
    setCurrentModal(null)
    setModalProps({})
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, currentModal, modalProps }}>
      {children}
      <ModalRenderer />
    </ModalContext.Provider>
  )
}

// Компонент для рендеринга активного модального окна
function ModalRenderer() {
  const { currentModal, closeModal, modalProps } = useModal()

  // Настройки для разных типов модальных окон
  const modalConfig = {
    karma: {
      width: "1000px",
      component: lazy(() => import("./modals/karma-modal")),
    },
    businessConsultation: {
      width: "1000px",
      component: lazy(() => import("./modals/business-consultation-modal")),
    },
    childrenAstrology: {
      width: "1000px",
      component: lazy(() => import("./modals/children-astrology-modal")),
    },
    expressConsultation: {
      width: "800px",
      component: lazy(() => import("./modals/express-consultation-modal")),
    },
    calendars: {
      width: "1100px",
      component: lazy(() => import("./modals/calendars-modal")),
    },
    astrologicalConsultation: {
      width: "1000px",
      component: lazy(() => import("./modals/astrological-consultation-modal")),
    },
  }

  if (!currentModal) return null

  const config = modalConfig[currentModal]
  if (!config) return null

  const ModalComponent = config.component

  return (
    <Suspense fallback={<ModalLoadingPlaceholder />}>
      <Modal isOpen={true} onClose={closeModal} width={config.width}>
        <ModalComponent {...modalProps} onClose={closeModal} />
      </Modal>
    </Suspense>
  )
}

// Плейсхолдер для загрузки модального окна
function ModalLoadingPlaceholder() {
  return (
    <Modal isOpen={true} onClose={() => {}} width="300px">
      <div className="flex items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-beige-100 border-t-gray"></div>
      </div>
    </Modal>
  )
}

import { lazy, Suspense } from "react"
