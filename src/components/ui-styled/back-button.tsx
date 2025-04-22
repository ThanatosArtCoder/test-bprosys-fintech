"use client"

import Link from "next/link"
import styled from "styled-components"
import { ChevronLeft } from "lucide-react"

interface BackButtonProps {
  href: string
}

const StyledBackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--color-primary);
  }
`

export default function BackButton({ href }: BackButtonProps) {
  return (
    <StyledBackButton href={href}>
      <ChevronLeft size={16} />
      Volver al catálogo
    </StyledBackButton>
  )
}
