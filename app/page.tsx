"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the Russian version by default
    router.push("/ru")
  }, [router])

  return null // This page will redirect, so no need to render anything
}
