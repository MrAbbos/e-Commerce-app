import "./style.css";
import axios from "axios";
import Card from "./card";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../redux/actions/actions";

export default function Cards() {
  const dispatch = useDispatch();

  const fetchingProducts = async function () {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchingProducts();
  }, []);

  return (
    <section id="cards">
      <div className="cards">
        <Card />
      </div>
    </section>
  );
}
