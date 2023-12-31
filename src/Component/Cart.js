import React from "react";
import { useDispatch } from "react-redux";
import { CartItems } from "../actions";
import './style.css';
import { updateCart, DeleteCart } from "../actions";

export default function Cart({ item }) {
  const dispatchPlus = useDispatch();
  const dispatchMinus = useDispatch();
  const dispatchTotal = useDispatch();
  const dispatchDelete = useDispatch();

  // Function to Increment product quantity
  function handlePlus(item) {
    item.qty += 1;
    dispatchPlus(updateCart(item));
    dispatchTotal(CartItems());
  }

 // Function to Reduce product quantity
  function handleMinus(item) {
    if (item.qty > 1) {
      item.qty -= 1;
      dispatchMinus(updateCart(item));
      dispatchTotal(CartItems());
    }
  }

  // Function to remove a product from the shopping cart.
  function handleCancel(item) {
    dispatchDelete(DeleteCart(item));
    dispatchTotal(CartItems());
  }
  return (
    <>
      {/* Adding items to the shopping cart */}
      <div className="d-flex container-sm p-1 bg-white  gap-5">
        {/* left part  */}
        <img
          src={item.thumbnail}
          alt="error"
          id="card-image "
          style={{ width: "50%", height: "17rem", objectFit: "cover" }}
        />
        {/* right-part  */}
        <div
          className="d-flex flex-column gap-2 justify-content-center"
          style={{ width: "50%" }}
        >
          <span>{item.title}</span>
          <span className="text-success">
            <span className="text-danger">Price:</span>Rs{item.price}
          </span>

          <div className="d-flex gap-3 mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6941/6941676.png"
              alt="error"
              width={"30rem"}
              onClick={() => handlePlus(item)}
            />
            <span className=" border border-1 border-dark px-4">
              {item.qty}
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828777.png"
              alt="error"
              width={"30rem"}
              onClick={() => handleMinus(item)}
            />
          </div>
          <div className="align-self-end mt-5 ">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleCancel(item)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
