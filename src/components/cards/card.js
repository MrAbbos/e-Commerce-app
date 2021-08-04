import { useSelector } from "react-redux";

export default function Card() {
  const products = useSelector((state) => state.allProducts.products);
  let everyProduct = products.map((product) => {
    const { id, title, image, price, category } = product;
    <div className="card" key={id}>
      <div className="img-card">
        <img width="100%" src={image} alt={title} />
      </div>
      <div className="flex content-card space-b">
        <div className="card-box-left">
          {title}
          <br />
          Size: 41
          <br />
          {category}
        </div>
        <div className="card-box-right">
          <i className="far fa-heart"></i>
          <i className="fas fa-heart"></i>
          <br />
          <br />
          Cost: {price}
        </div>
      </div>
    </div>;
  });
  console.log(products);
  return <>{everyProduct}</>;
}
