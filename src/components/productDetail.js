import axios from "axios";
import "./styleForProductDetailed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/actions";

export default function ProductDetailed() {
  const dispatch = useDispatch();

  let { productId } = useParams();

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

  const product = useSelector(
    (state) => state.product.products
    //(state) => state.allProducts.products[--productId]
  );
  console.log(product);

  // for add to cart
  const [subTotal, setSubTotal] = useState(0);
  function addOne() {
    setSubTotal(subTotal + 1);
  }
  function takeOne() {
    subTotal - 1 > 0
      ? setSubTotal(subTotal - 1)
      : alert("Please choose at least one product");
  }

  const { id, image, title, category, price, description } = product;
  return (
    <section id="productDetailed">
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="detailed_card flex">
            <div className="box-1">
              <img width="100%" src={image} alt={title} />
            </div>
            <div className="box-2">
              <h1>{title}</h1>
              <FontAwesomeIcon
                id="faStar"
                //onClick={setAppr(false)}
                icon={faStar}
              />
              <FontAwesomeIcon
                id="faStar"
                //onClick={setAppr(false)}
                icon={faStar}
              />
              <FontAwesomeIcon
                id="faStar"
                //onClick={setAppr(false)}
                icon={faStar}
              />
              <FontAwesomeIcon
                id="faStar"
                //onClick={setAppr(false)}
                icon={faStar}
              />
              <FontAwesomeIcon
                id="faStar"
                //onClick={setAppr(false)}
                icon={faStar}
              />
              <span> 1 trillion reviews</span> <br />
              <span>{description}</span>
              <div id="choosing" className="flex space-b">
                <div className="choosingSize">
                  <span>Choose the size </span>
                  <select>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                    <option>XLarge</option>
                    <option>2XLarge</option>
                    <option>3xLarge</option>
                  </select>
                </div>
                <div className="numberOfGoods flex">
                  <div className="counter flex space-b">
                    <button onClick={takeOne}>- </button>
                    <input value={subTotal} type="number" />
                    <button onClick={addOne}>+ </button>
                  </div>
                </div>
                <div>
                  <span> Price is: {price * subTotal} $ </span>
                  <button> Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
