"use client"
import styled from "styled-components"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`

export function Logo() {
  return <LogoWrapper>FP</LogoWrapper>
}
