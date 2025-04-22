import { notFound } from "next/navigation"
import { getProductById, getProducts } from "@/lib/products"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"
import BackButton from "@/components/ui-styled/back-button"

export async function generateStaticParams() {
  const products = getProducts()

  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <BackButton href="/" />
        <ProductDetail product={product} />
      </div>
      <Footer />
    </main>
  )
}
