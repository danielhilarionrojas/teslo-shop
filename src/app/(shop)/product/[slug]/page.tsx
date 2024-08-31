import { ProductSlideShow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonst";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
  }

const products = initialData.products;

export default function ProductPage({ params }: Props) {

  const { slug } = params;

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductSlideShow title={product.title} images={product.images}/>
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>

        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes}/>

        <QuantitySelector quantity={1}/>

        <button className="btn-primary my-5">
          Add to cart
        </button>

        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}