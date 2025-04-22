"use client"
import styled from "styled-components"
import { CreditCard, Wallet, LineChart, Shield, Home, Landmark, Banknote, Car } from "lucide-react"

interface ProductIconProps {
  type: string
  size?: "default" | "large"
}

interface IconWrapperProps {
  size: "default" | "large"
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size === "large" ? "64px" : "40px")};
  height: ${(props) => (props.size === "large" ? "64px" : "40px")};
  border-radius: 12px;
  background-color: var(--primary-50, rgba(99, 102, 241, 0.1));
  color: var(--primary);
  
  svg {
    width: ${(props) => (props.size === "large" ? "32px" : "24px")};
    height: ${(props) => (props.size === "large" ? "32px" : "24px")};
  }
`

export function ProductIcon({ type, size = "default" }: ProductIconProps) {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case "tarjeta de crédito":
        return <CreditCard />
      case "cuenta":
        return <Wallet />
      case "inversión":
        return <LineChart />
      case "seguro":
        return <Shield />
      case "hipoteca":
        return <Home />
      case "préstamo":
        return <Banknote />
      case "préstamo automotriz":
        return <Car />
      default:
        return <Landmark />
    }
  }

  return <IconWrapper size={size}>{getIcon()}</IconWrapper>
}
