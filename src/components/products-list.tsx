import { type Product } from "@/types";
import { Fragment } from "react";
import BigCard from "./big-card";
import Card from "./card";
import RectangleCard from "./rectangle-card";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <section className="grid grid-cols-2 gap-x-4">
      {products.map((product, idx) => (
        <Fragment key={idx}>
          {idx === 0 ? (
            <BigCard product={product} />
          ) : idx % 3 === 0 ? (
            <RectangleCard product={product} />
          ) : (
            <Card product={product} />
          )}
        </Fragment>
      ))}
    </section>
  );
}
