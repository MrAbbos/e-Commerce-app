import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import DecisionMaking from "../buttons/decisionMaking/decisionMaking";
import "./savat.css";

export default function Savat() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  let quantity = 0;
  const [subTotal, setSubTotal] = useState(quantity);
  let maincart = cart.map((e) => {
    //<<<<<------ setting selected option like small, large, xlarge, 2x large------>>>>>>
    console.log(e.price);

    //<<<<------ setting and changing number of products ------>>>>>
    quantity = e.quantity;

    function plusOne() {
      setSubTotal(subTotal + 1);
    }
    function minusOne() {
      subTotal - 1 > 0
        ? setSubTotal(subTotal - 1)
        : alert("Please choose at least one product");
    }

    //<<<<<------ main dispatching function -------->>>>>>>>>>

    function addToCartf() {
      if (subTotal > 0) {
        alert("bug: current cart item should be update but failed");

        // dispatch(
        //   addToCart(
        //     e.id,
        //     e.title,
        //     e.type,
        //     e.quantity,
        //     e.price,
        //     e.image,
        //     e.category
        //   )
        // );
      } else {
        alert("Please select all necersiry things");
      }
    }
    return (
      <div className="savat">
        <div className="savatComponent flex">
          <div className="savatImg flex">
            <img src={e.image} width="100px" height="100px"></img>
          </div>
          <div className="cart-right-box">
            <div className="box flex column-660">
              <div className="box-1">
                {e.title}
                <br /> {e.category}
              </div>
              <div className="box-2">
                {" "}
                <div id="choosing" className="flex space-b">
                  <div className="choosingSize">
                    <span>{e.type}</span>
                  </div>
                  <div className="numberOfGoods space-a flex">
                    <button onClick={minusOne}>- </button>
                    {subTotal || quantity}
                    <button onClick={plusOne}>+ </button>
                  </div>
                  <div className="a">
                    <span>
                      {" "}
                      Subtotal price is:{" "}
                      {Math.round(e.price * subTotal * 1000) / 1000}${" "}
                    </span>
                  </div>
                </div>
                <button className="btn btnAddCart" onClick={addToCartf}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  });

  return <section id="savat">{maincart}</section>;
}
