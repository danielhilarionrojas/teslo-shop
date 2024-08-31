import { ProductGrid, Title } from "@/components";
import { initialData, Category } from "@/seed/seed";
import { notFound } from "next/navigation";

const allProducts = initialData.products;


interface Props {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: Props) {

  const { id } = params;

  const products = allProducts.filter((product) => product.gender === id);

  // if (id === 'kids') {
  //   notFound();
  // }

  return (
    <div>
      <Title title={id.toUpperCase()} subTitle="All Products" className="mb-2"/>
      
      <ProductGrid products={products} />
    </div>
  );
}