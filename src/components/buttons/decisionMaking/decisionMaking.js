import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/actions";

export default function DecisionMaking(props) {
  //<<<<<------ setting selected option like small, large, xlarge, 2x large------>>>>>>
  const [selectedOption, setSelectedOption] = useState(props.type);

  function setType(e) {
    setSelectedOption(e.target.value);
  }

  //<<<<------ setting and changing number of products ------>>>>>
  const [subTotal, setSubTotal] = useState(props.quantity || 0);
  console.log(subTotal);
  function plusOne() {
    setSubTotal(subTotal + 1);
  }
  function minusOne() {
    subTotal - 1 > 0
      ? setSubTotal(subTotal - 1)
      : alert("Please choose at least one product");
  }

  //<<<<<------ main dispatching function -------->>>>>>>>>>
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function addToCartf() {
    let isAlreadyInCart = false;
    cart.forEach((e) => {
      if (e.id === props.id && e.type === selectedOption) {
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
      dispatch(addToCart(props.id, selectedOption, subTotal, props.image));
    } else {
      alert("Please select all necersiry things");
    }
  }
  return (
    <>
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
          <button onClick={minusOne}>- </button>
          {subTotal}
          <button onClick={plusOne}>+ </button>
        </div>
        <div className="a">
          <span>
            {" "}
            Subtotal price is:{" "}
          
            {Math.round(props.price * subTotal * 1000) / 1000}${" "}
          </span>
        </div>
      </div>
      <button className="btn btnAddCart" onClick={addToCartf}>
        Add to cart
      </button>
    </>
  );
}
