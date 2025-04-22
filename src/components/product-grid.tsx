"use client"

import { useState } from "react"
import { getProducts } from "@/lib/products"
import ProductCard from "./product-card"
import { CategoryFilter } from "./ui-styled/category-filter"

export default function ProductGrid() {
  const products = getProducts()
  const categories = [...new Set(products.map((product) => product.category))]

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <div className="space-y-8">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay productos disponibles en esta categoría.</p>
        </div>
      )}
    </div>
  )
}
