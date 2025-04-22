"use client"
import styled from "styled-components"
import { Check } from "lucide-react"

interface ProductFeaturesProps {
  features: string[]
}

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  
  svg {
    color: var(--primary);
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <FeaturesGrid>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <Check size={20} />
          <span>{feature}</span>
        </FeatureItem>
      ))}
    </FeaturesGrid>
  )
}
