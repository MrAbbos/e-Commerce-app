import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
// import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  //const [appeareance, setAppr] = useState(true);
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  let everyProduct = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="card" key={id}>
        <div className="img-card flex">
          <img width="100%" src={image} alt={title} />
        </div>
        <Link to={`/product/${id}`}>
          <div className="flex content-card space-b">
            <div className="card-box-left">
              {title}
              <br />
              {category}
              <br />
              {price}
            </div>
            <div className="card-box-right">
              <div className="icon">
                <FontAwesomeIcon
                  //onClick={setAppr(false)}
                  icon={farHeart}
                  //style={{ display: appeareance ? "block" : "none" }}
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  //onClick={setAppr(true)}
                  //style={{ display: appeareance ? "none" : "block" }}
                />
              </div>
              <div className="add-btn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{everyProduct}</>;
}
