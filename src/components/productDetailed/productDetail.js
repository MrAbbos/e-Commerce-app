import axios from "axios";
import "./styleForProductDetailed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, addToCart } from "../../redux/actions/actions";

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
  const cart = useSelector((state) => state.cart.cart);

  //          <<<<<------------------------>>>>>>>>>
  //           ---   counter for subtotal ----
  const [subTotal, setSubTotal] = useState(0);

  function addOne() {
    setSubTotal(subTotal + 1);
  }

  function takeOne() {
    subTotal - 1 > 0
      ? setSubTotal(subTotal - 1)
      : alert("Please choose at least one product");
  }

  //                    ---   counter for subtotal end  ----
  //                   <<<----------------------------------->>>>>
  //                       ---  btn for add to cart  ----

  const [selectedOption, setSelectedOption] = useState("");

  function setType(e) {
    setSelectedOption(e.target.value);
  }
  console.log(selectedOption);
  function addToCartf() {
    let isAlreadyInCart = false;
    cart.forEach((e) => {
      if (e.id === productId && e.type === selectedOption) {
        isAlreadyInCart = true;
      }
    });
    if (isAlreadyInCart) {
      alert(`Bug needed to be fixed
      description: when user wants to buy the same thing more than a one time programm should update the quantity of that product.
      `);
    } else if (
      subTotal > 0 &&
      selectedOption !== "" &&
      selectedOption !== "--select-"
    ) {
      dispatch(addToCart(productId, selectedOption, subTotal));
      console.log(selectedOption);
    } else {
      alert("Please select all necersiry things");
    }
  }
  //                         ---  btn for add to cart  end   ----
  //                        <<<<<<---------------------------->>>>>>
  //for add to cart end

  const { id, image, title, category, price, description } = product;
  return (
    <section id="productDetailed">
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="detailed_card flex column-660">
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
              <span>
                <p>{description}</p>
              </span>
              <div id="choosing" className="flex space-b">
                <div className="choosingSize">
                  <span>Choose size </span>
                  <select id="sizeSelector" onChange={setType}>
                    <option>-select-</option>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                    <option>XLarge</option>
                    <option>2XLarge</option>
                    <option>3xLarge</option>
                  </select>
                </div>
                <div className="numberOfGoods space-a flex">
                  <button onClick={takeOne}>- </button>
                  {subTotal}
                  <button onClick={addOne}>+ </button>
                </div>
                <div className="a">
                  <span>
                    {" "}
                    Subtotal price is:{" "}
                    {Math.round(price * subTotal * 1000) / 1000}${" "}
                  </span>
                </div>
              </div>
              <button className="btn btnAddCart" onClick={addToCartf}>
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
