import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
// import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  //const [appeareance, setAppr] = useState(true);
  const products = useSelector((state) => state.allProducts.products);
  let everyProduct = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="card" key={id}>
        <Link to={`/product/${id}`}>
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
              <br />
              <br />
              Cost: {price}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{everyProduct}</>;
}
