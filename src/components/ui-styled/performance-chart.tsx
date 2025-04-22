"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import type { Product } from "@/types/product"

interface PerformanceChartProps {
  product: Product
}

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`

export function PerformanceChart({ product }: PerformanceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions for better resolution
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Generate mock performance data if not provided
    const performanceData = product.performanceData || generateMockPerformanceData(product)

    // Draw chart
    drawChart(ctx, performanceData, rect.width, rect.height)
  }, [product])

  return (
    <ChartContainer>
      <Canvas ref={canvasRef} />
    </ChartContainer>
  )
}

function generateMockPerformanceData(product: Product) {
  // Generate 12 months of mock data
  const months = 12
  const data = []

  // Base value depends on product type
  let baseValue = 100

  // Higher risk products have more volatility but potentially higher returns
  const volatility = product.riskLevel ? product.riskLevel / 10 : 0.1
  const trend = product.riskLevel ? (product.riskLevel - 3) / 10 : 0.05

  for (let i = 0; i < months; i++) {
    // Add some randomness and a slight upward trend for most products
    const randomFactor = (Math.random() - 0.5) * volatility
    baseValue = baseValue * (1 + trend / months + randomFactor)

    data.push({
      month: i,
      value: baseValue,
    })
  }

  return data
}

function drawChart(
  ctx: CanvasRenderingContext2D,
  data: Array<{ month: number; value: number }>,
  width: number,
  height: number,
) {
  // Clear canvas
  ctx.clearRect(0, 0, width, height)

  // Chart dimensions
  const padding = 20
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  // Find min and max values
  const values = data.map((d) => d.value)
  const minValue = Math.min(...values) * 0.9
  const maxValue = Math.max(...values) * 1.1

  // Draw axes
  ctx.strokeStyle = "#e2e8f0"
  ctx.beginPath()
  ctx.moveTo(padding, padding)
  ctx.lineTo(padding, height - padding)
  ctx.lineTo(width - padding, height - padding)
  ctx.stroke()

  // Draw line
  ctx.strokeStyle = "#6366f1"
  ctx.lineWidth = 2
  ctx.beginPath()

  data.forEach((point, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth
    const y = height - padding - ((point.value - minValue) / (maxValue - minValue)) * chartHeight

    if (i === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })

  ctx.stroke()

  // Draw area under the line
  ctx.fillStyle = "rgba(99, 102, 241, 0.1)"
  ctx.beginPath()

  // Start from bottom left
  ctx.moveTo(padding, height - padding)

  // Draw up to first point
  const firstPoint = data[0]
  const firstX = padding
  const firstY = height - padding - ((firstPoint.value - minValue) / (maxValue - minValue)) * chartHeight
  ctx.lineTo(firstX, firstY)

  // Draw the line again
  data.forEach((point, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth
    const y = height - padding - ((point.value - minValue) / (maxValue - minValue)) * chartHeight
    ctx.lineTo(x, y)
  })

  // Draw down to bottom right and close the path
  ctx.lineTo(width - padding, height - padding)
  ctx.closePath()
  ctx.fill()

  // Draw points
  ctx.fillStyle = "#ffffff"
  ctx.strokeStyle = "#6366f1"
  ctx.lineWidth = 2

  data.forEach((point, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth
    const y = height - padding - ((point.value - minValue) / (maxValue - minValue)) * chartHeight

    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  })
}
