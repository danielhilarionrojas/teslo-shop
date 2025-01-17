import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function cartPage() {
  const productsInCart = [initialData.products[0]];
 
  // if (!productsInCart) redirect('/empty')


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cart" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add Items</span>
            <Link href="/" className="underline mb-5">
              Continue Shopping
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  width={100}
                  height={100}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />

                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white ronded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Summary</h2>
            <div className="grid grid-cols-2">
              <span>No. products</span>
              <span className="text rigth">3 Articles</span>

              <span>Subtotal</span>
              <span className="text rigth">$100</span>

              <span>Taxes (15%)</span>
              <span className="text rigth">$100</span>

              <span className="text-2xl mt-5">Total (15%)</span>
              <span className="text-2xl mt-5 rigth">$100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link className="flex btn-primary justify-center " href="/checkout/address">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
