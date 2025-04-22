"use client"
import styled from "styled-components"

interface RiskIndicatorProps {
  level: number
  showLabel?: boolean
}

const RiskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const RiskBar = styled.div`
  display: flex;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--muted);
`

interface RiskSegmentProps {
  active: boolean
  level: "low" | "medium" | "high"
}

const RiskSegment = styled.div<RiskSegmentProps>`
  flex: 1;
  height: 100%;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.active
      ? props.level === "low"
        ? "var(--success)"
        : props.level === "medium"
          ? "var(--warning)"
          : "var(--destructive)"
      : "var(--muted)"};
  margin-right: 2px;
  
  &:last-child {
    margin-right: 0;
  }
`

const RiskLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--muted-foreground);
`

export function RiskIndicator({ level, showLabel = false }: RiskIndicatorProps) {
  // Ensure level is between 1 and 5
  const safeLevel = Math.max(1, Math.min(5, level))

  let riskText = "Bajo"
  if (safeLevel >= 4) riskText = "Alto"
  else if (safeLevel >= 2) riskText = "Medio"

  return (
    <RiskContainer>
      <RiskBar>
        <RiskSegment active={safeLevel >= 1} level="low" />
        <RiskSegment active={safeLevel >= 2} level="low" />
        <RiskSegment active={safeLevel >= 3} level="medium" />
        <RiskSegment active={safeLevel >= 4} level="high" />
        <RiskSegment active={safeLevel >= 5} level="high" />
      </RiskBar>

      {showLabel && (
        <RiskLabel>
          <span>Bajo</span>
          <span>Medio</span>
          <span>Alto</span>
        </RiskLabel>
      )}

      {!showLabel && <div className="font-medium">{riskText}</div>}
    </RiskContainer>
  )
}
