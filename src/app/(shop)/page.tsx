import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";


const products = initialData.products;

export default function HomePage() {
  return (
    <div>

      <Title title="Store" subTitle="All Products" className="mb-2"/>

      <ProductGrid products={products} />

    </div>
  );
}
