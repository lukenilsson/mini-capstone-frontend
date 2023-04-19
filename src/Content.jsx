import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const products = [
    { id: 1, name: "Product 1", price: "$1", description: "Super cool!" },
    { id: 2, name: "Product 2", price: "$2", description: "Super rad!" },
  ];
  return (
    <div>
      <h1>Welcome Yo</h1>
      <ProductsIndex products={products} />
    </div>
  );
}
