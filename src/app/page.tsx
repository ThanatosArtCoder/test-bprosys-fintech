import Header from "@/components/header"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-8 md:text-4xl">Nuestros Productos Financieros</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubre nuestra gama de productos financieros diseñados para ayudarte a alcanzar tus metas. Desde cuentas de
          ahorro hasta inversiones, tenemos la solución perfecta para ti.
        </p>
        <ProductGrid />
      </div>
      <Footer />
    </main>
  )
}
