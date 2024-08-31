import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: Props) {
  const { id } = params;

  const productsInCart = [initialData.products[0]];

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs fonr-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Payment pending</span>
            </div>

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
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white ronded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Shipping Address</h2>
            <div className="mb-10">
              <p className="text-xl">Salome Henao</p>
              <p>La Estrella</p>
              <p>Medellin - Antioquia</p>
            </div>

            <div className="w-fuññ h-0.5 rounded bg-gray-200 mb-10" />

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
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs fonr-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                <span className="mx-2">Payment pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
