import { type Product } from "@/types";

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <article className=" flex flex-col">
      <picture className="rounded bg-gradient-to-t from-zinc-300 overflow-hidden relative to-zinc-200 w-full aspect-square">
        <img
          src={product.src}
          alt=""
          className="object-cover absolute w-full h-full inset-0"
        />
      </picture>
      <footer className="flex flex-col gap-1 py-4">
        <h2 className="text-lg leading-[0.9] font-bold">{product.title}</h2>
        <p className="text-zinc-500">$ {product.price}</p>
      </footer>
    </article>
  );
}
