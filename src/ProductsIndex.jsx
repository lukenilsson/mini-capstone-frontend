import { Content } from "./Content";

export function ProductsIndex(props) {
  return (
    <div>
      <h1>All My Prizzy Yizzys</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
