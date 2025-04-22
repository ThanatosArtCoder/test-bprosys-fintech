"use client"
import type { Product } from "@/types/product"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RiskIndicator } from "./ui-styled/risk-indicator"
import { ProductIcon } from "./ui-styled/product-icon"
import { PerformanceChart } from "./ui-styled/performance-chart"
import { ProductFeatures } from "./ui-styled/product-features"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{product.category}</Badge>
            <Badge variant="secondary">{product.type}</Badge>
          </div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        <ProductIcon type={product.type} size="large" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Detalles principales</h3>
            <div className="space-y-4">
              {product.interestRate !== undefined && (
                <div>
                  <p className="text-sm text-muted-foreground">Tasa de interés</p>
                  <p className="text-2xl font-bold">{product.interestRate}%</p>
                </div>
              )}

              {product.riskLevel !== undefined && (
                <div>
                  <p className="text-sm text-muted-foreground">Nivel de riesgo</p>
                  <RiskIndicator level={product.riskLevel} showLabel />
                </div>
              )}

              {product.term && (
                <div>
                  <p className="text-sm text-muted-foreground">Plazo</p>
                  <p className="font-medium">{product.term}</p>
                </div>
              )}

              {product.minimumInvestment && (
                <div>
                  <p className="text-sm text-muted-foreground">Inversión mínima</p>
                  <p className="font-medium">${product.minimumInvestment.toLocaleString()}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Rendimiento histórico</h3>
            <PerformanceChart product={product} />
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Características y beneficios</h3>
        <ProductFeatures features={product.features || []} />
      </div>

      <div className="bg-muted/40 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-medium mb-4">Requisitos</h3>
        <ul className="list-disc pl-5 space-y-2">
          {product.requirements?.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">Solicitar ahora</Button>
        <Button variant="outline" size="lg">
          Agendar asesoría
        </Button>
      </div>
    </div>
  )
}
