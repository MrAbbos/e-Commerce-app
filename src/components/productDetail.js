import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/actions";

export default function ProductDetailed() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async function () {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((w) => {
        console.log("err: " + w);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]);
  return (
    <section>
      {/* <div className="img-card">
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
      </div> */}
      salom
    </section>
  );
}
