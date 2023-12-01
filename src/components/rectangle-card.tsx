import { type Product } from "@/types";

interface RectangleCardProps {
  product: Product;
}

export default function RectangleCard({ product }: RectangleCardProps) {
  return (
    <article className=" flex flex-col col-span-2">
      <picture className="rounded relative overflow-hidden bg-gradient-to-t from-zinc-300 to-zinc-200 w-full aspect-[2/1]">
        <img
          src={product.src}
          alt=""
          className="object-cover absolute w-full h-full inset-0"
        />
      </picture>
      <footer className="flex flex-col gap-1 py-4">
        <h2 className="leading-[0.9] font-bold text-2xl">{product.title}</h2>
        <p className="text-zinc-500 text-lg">$ {product.price}</p>
      </footer>
    </article>
  );
}
