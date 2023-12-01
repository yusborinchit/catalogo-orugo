import Header from "@/components/header";
import ProductsList from "@/components/products-list";

const PRODUCTS = [
  {
    src: "/1.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/2.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/3.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/4.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/5.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/6.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/7.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/8.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/9.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/10.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/11.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
  {
    src: "/12.jpg",
    alt: "",
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 1200,
  },
];

export default function Home() {
  return (
    <main className="max-w-[400px] mx-auto px-4">
      <Header />
      <ProductsList products={PRODUCTS} />
    </main>
  );
}
