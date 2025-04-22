"use client"
import Link from "next/link"
import type { Product } from "@/types/product"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RiskIndicator } from "./ui-styled/risk-indicator"
import { ProductIcon } from "./ui-styled/product-icon"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <ProductIcon type={product.type} />
          <Badge variant="outline">{product.category}</Badge>
        </div>

        <h3 className="text-xl font-bold mb-2">{product.name}</h3>

        <div className="space-y-4 mb-4">
          {product.interestRate !== undefined && (
            <div>
              <p className="text-sm text-muted-foreground">Tasa de interés</p>
              <p className="font-semibold">{product.interestRate}%</p>
            </div>
          )}

          {product.riskLevel !== undefined && (
            <div>
              <p className="text-sm text-muted-foreground">Nivel de riesgo</p>
              <RiskIndicator level={product.riskLevel} />
            </div>
          )}

          <div>
            <p className="text-sm text-muted-foreground">Tipo</p>
            <p className="font-medium">{product.type}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/product/${product.id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
