'use client'
import { useParams } from "next/navigation"

export const useLocalizedHref = () => {
  const params = useParams()
  const locale = typeof params.locale === 'string' ? params.locale : 'en'

  const getLocalizedHref = (href: string) => `/${locale}${href}`

  return { getLocalizedHref, locale }
}
